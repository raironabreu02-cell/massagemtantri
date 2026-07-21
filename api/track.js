import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.REDIS_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { event, button, page, device, country } = req.body;

    if (!event) {
      return res.status(400).json({ error: 'Event required' });
    }

    const timestamp = new Date().toISOString();
    const today = new Date().toISOString().split('T')[0];

    // Rastrear visita
    if (event === 'visit') {
      await redis.incr('visits:total');
      await redis.incr(`visits:${today}`);
      
      if (device) {
        await redis.incr(`device:${device}:${today}`);
      }
      if (country) {
        await redis.incr(`country:${country}:${today}`);
      }
    }

    // Rastrear clique em botão
    if (event === 'click' && button) {
      await redis.incr(`click:${button}:total`);
      await redis.incr(`click:${button}:${today}`);
      await redis.incr('clicks:total');
      
      // Rastrear conversão se for botão de compra
      if (button.includes('premium') || button.includes('basico')) {
        await redis.incr('conversions:total');
        await redis.incr(`conversions:${today}`);
      }
    }

    // Rastrear página visitada
    if (event === 'pageview' && page) {
      await redis.incr(`page:${page}:${today}`);
      await redis.lpush(`pages:visited:${today}`, page);
    }

    // Log de eventos
    await redis.lpush('events:log', JSON.stringify({
      event,
      button,
      page,
      device,
      country,
      timestamp,
    }));

    // Manter apenas últimos 1000 eventos
    await redis.ltrim('events:log', 0, 999);

    res.status(200).json({ 
      success: true, 
      event,
      timestamp 
    });

  } catch (error) {
    console.error('Track error:', error);
    res.status(500).json({ error: 'Failed to track event' });
  }
}

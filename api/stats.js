import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.REDIS_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Pegar todos os dados
    const [
      visitsTotal,
      visitsToday,
      clicksTotal,
      clicksBasico,
      clicksPremium,
      conversionsTotal,
      conversionsToday,
      deviceMobileToday,
      deviceDesktopToday,
    ] = await Promise.all([
      redis.get('visits:total') || 0,
      redis.get(`visits:${today}`) || 0,
      redis.get('clicks:total') || 0,
      redis.get(`click:basico:total`) || 0,
      redis.get(`click:premium:total`) || 0,
      redis.get('conversions:total') || 0,
      redis.get(`conversions:${today}`) || 0,
      redis.get(`device:mobile:${today}`) || 0,
      redis.get(`device:desktop:${today}`) || 0,
    ]);

    const totalVisitsToday = parseInt(visitsToday) || 0;
    const totalConversions = parseInt(conversionsTotal) || 0;
    const conversionRate = totalVisitsToday > 0 
      ? ((totalConversions / totalVisitsToday) * 100).toFixed(2)
      : 0;

    const stats = {
      visits: {
        total: parseInt(visitsTotal) || 0,
        today: totalVisitsToday,
      },
      clicks: {
        total: parseInt(clicksTotal) || 0,
        basico: parseInt(clicksBasico) || 0,
        premium: parseInt(clicksPremium) || 0,
      },
      conversions: {
        total: totalConversions,
        today: parseInt(conversionsToday) || 0,
        rate: parseFloat(conversionRate),
      },
      devices: {
        mobile: parseInt(deviceMobileToday) || 0,
        desktop: parseInt(deviceDesktopToday) || 0,
      },
      lastUpdated: new Date().toISOString(),
    };

    res.status(200).json(stats);

  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
}

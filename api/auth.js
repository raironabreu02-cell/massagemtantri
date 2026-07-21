import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Password required' });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;

    // Verificar senha
    if (password !== adminPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Gerar token simples (JWT seria melhor em produção)
    const token = crypto.randomBytes(32).toString('hex');
    const timestamp = new Date().getTime();
    const expiresAt = timestamp + (24 * 60 * 60 * 1000); // 24 horas

    res.status(200).json({
      success: true,
      token,
      expiresAt,
      message: 'Login successful',
    });

  } catch (error) {
    console.error('Auth error:', error);
    res.status(500).json({ error: 'Authentication failed' });
  }
}

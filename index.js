const express = require('express');
const app = express();

const KODIK_TOKEN = 'd63de7c52a067903f46bee3d6e32542b';

app.get('/search', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const params = new URLSearchParams(req.query);
    params.set('token', KODIK_TOKEN);
    const resp = await fetch(`https://kodikapi.com/search?${params}`);
    const data = await resp.json();
    res.json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000);

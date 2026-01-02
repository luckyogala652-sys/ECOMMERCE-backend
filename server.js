const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const app = express();
const PORT = 5000;
const path = require('path');
const fs = require('fs');

app.use(cors({
  origin: 'https://ecommerce-frontend-blush-theta.vercel.app',
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.use('/images', express.static(path.join(process.cwd(), 'public/images'),{
  setHeaders: (res, path)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

app.get('/api/products', (req, res)=> {
  res.json(products);
});

app.get('/api/list-images', (req, res) => {
  fs.readdir(path.join(__dirname, 'public/images'), (err, files) => {
    if (err) return res.status(500).send('Error reading images folder');
    res.json(files);
  });
});

app.listen(PORT, ()=>{
  console.log(`Backend server running at http://localhost:${PORT}`);
});



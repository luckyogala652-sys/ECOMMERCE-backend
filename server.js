const express = require('express');
const cors = require('cors');
const products = require('./data/products');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));

app.get('/api/products', (req, res)=> {
  res.json(products);
});

app.listen(PORT, ()=>{
  console.log(`Backend server running at http://localhost:${PORT}`);
});

const express = require('express');
const connection = require('../models/connection');

const router = express.Router();

router.get('/', async (req, res) => {
  const [row] = await connection.execute('SELECT * FROM products');
  res.status(200).json(row); 
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [row] = await connection.execute('SELECT * FROM products where id = ?', [id]);
  res.status(200).json(row); 
});

module.exports = router;

const express = require('express');
const productModel = require('../models/productModel');


const searchRouter = express.Router()


searchRouter.get('/search', async (req, res) => {
    const { productName, categoryId } = req.query;
  
    try {
      const query = {};
      if (productName) {
        query.productname = { $regex: productName, $options: 'i' }; // Case-insensitive regex search
      }
      if (categoryId) {
        query.category_id.category = categoryId;
      }
  
      const products = await productModel.find(query).populate('category_id');
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching search results' });
    }
  });
  module.exports= searchRouter
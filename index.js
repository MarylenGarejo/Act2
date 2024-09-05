const express = require('express');
const router = express.Router();
const path = require('path');

// Route for home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/index.html'));
});

// Route for about page
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/about.html'));
});

// Route for contact page
router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/contact.html'));
});

// Route for services page
router.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/address.html'));
});

// Route for products page
router.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/products.html'));
});

module.exports = router;


const express = require('express');
const { getProductById, createProduct, getAllProduct } = require('../controller/product');
const router = express.Router()

router.get("/products/:id",getProductById)
router.post("/createproduct",createProduct)
router.get("/getAllProduct",getAllProduct)
module.exports = router
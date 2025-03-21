import express from 'express';
import { createProduct, getAllProducts, getProductById, deleteProduct } from '../controllers/ProductController.js';
import { verifyJWT } from '../middlewares/authMiddlewares.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;


const router = express.Router();

// Route to create a new product (requires authentication)
router.post('/createProduct', verifyJWT, createProduct);

// Route to get all products (no authentication required)
router.get('/getAllProducts', verifyJWT, getAllProducts);

// Route to get a product by ID (no authentication required)
router.get('/getProductById/:id', getProductById);
// http://localhost:3000/api/v1/products/getProductById/674e2282edf0786e5d3be48d

// Route to delete a product by ID (requires authentication)
router.delete('/deleteProduct/:id', verifyJWT, deleteProduct);

// router.post("/upload", verifyJWT, createProduct);

export default router;

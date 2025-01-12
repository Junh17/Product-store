import express from "express";
import mongoose from "mongoose";
import Product from '../models/product.model.js';
import { getProducts, createProducts, updatedProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProducts);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;
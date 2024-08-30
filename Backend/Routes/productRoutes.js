import express from "express";
import { createProduct } from "../Controller/productsController.js";
const router = express.Router();

router.post("/createProduct", createProduct);

export default router
import express from 'express'

const router = express.Router();

import { productManager } from "../controllers/ProductManager.js"

router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit;
    let products = await productManager.getProducts(limit);
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let product = await productManager.getProductById(id);
    res.send(product);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    let result = await productManager.addProduct(req.body);

    res.send(result);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    let products = await productManager.updateProduct(id, req.body);
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let result = await productManager.deleteProduct(id);
    res.send(result);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
import express from 'express'
const router = express.Router();


import { productManager } from "../controllers/ProductManager.js"


//Router
router.get('/', async (req, res) => {
    const limit = req.query.limit;
    let products = await productManager.getProducts(limit);
    //renderizar la vista
    res.render('home',{
        style: 'index.css',
        products
    })
})

router.get('/realTimeProducts', async (req, res) => {
    const limit = req.query.limit;
    let products = await productManager.getProducts(limit);
    res.render('realTimeProducts',{
        products
    })
})

router.post("/realTimeProducts", async (req, res) => {
    try {
        const limit = req.query.limit;
        let result = await productManager.addProduct(req.body);
        let products = await productManager.getProducts(limit);
        res.render('realTimeProducts',{
            products
        })
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      let result = await productManager.deleteProduct(id);
      let products = await productManager.getProducts(limit);
      res.render('realTimeProducts',{
          products
      })   
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).send("Internal Server Error");
    }
  });

export default router;
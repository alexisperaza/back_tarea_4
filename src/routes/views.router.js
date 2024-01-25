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
        style: 'index.css',
        products
    })
})


export default router;
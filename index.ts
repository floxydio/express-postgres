import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser'
import ProductController from './controllers/ProductController';
import cors from 'cors';

const app: Express = express();
const port = 3000;

const productController = new ProductController();

app.use(bodyParser.json())
app.options("*", cors({origin:true,credentials:true}))
app.use(bodyParser.urlencoded({
  extended: true
}))


app.get("/product", productController.get)
app.post("/product", productController.post)
app.put("/product-edit/:id", productController.put)
app.delete("/product-delete/:id", productController.delete)

app.listen(port, () => {
  console.log(`[server] : Listening on ${port}`)
})
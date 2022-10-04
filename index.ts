import express, {Express,Request,Response} from 'express';
import bodyParser from 'body-parser'
import ProductController from './controllers/ProductController';

const app: Express = express();
const port = 3000;

const productController = new ProductController();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.get("/product", productController.get)


app.listen(port, () => {
  console.log(`[server] : Listening on ${port}`)
})
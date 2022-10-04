import pool from '../database/db'
import { Request, Response } from 'express';

class ProductController {
  public async get(req: Request, res: Response) {
    try {
      const client = await pool.connect();
      //  res.send("AAA")
      const sql = "SELECT * FROM barang"

      const { rows } = await client.query(sql)
      const product = rows

      client.release()
      res.send({
        status: 200,
        data: product,
        message: "Successfully Get Data Barang",
      })
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  }
}


export default ProductController;
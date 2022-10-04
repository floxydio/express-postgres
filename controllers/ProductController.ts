import pool from '../database/db'
import { Request, Response } from 'express';

class ProductController {
  public async get(req: Request, res: Response) {
    try {
      const client = await pool.connect();
      const sql = "SELECT * FROM barang"

      const { rows } = await client.query(sql)
      const product = rows

      client.release()
      res.status(200).send({
        status: 200,
        data: product,
        message: "Successfully Get Data Barang",
      })
    } catch (e) {
      res.status(400).send(e)
    }
  }

  public async post(req: Request, res: Response) {
    try {
      const client = await pool.connect();

      const sql = `INSERT INTO barang(nama,harga) VALUES ('${req.body.nama}',${req.body.harga}) `

      await client.query(sql)
      client.release()

      res.status(201).send({
        status: 201,
        message: "Successfully Create Barang"
      })
    } catch (e) {
      res.status(400).send(e)
    }
  }

  public async put(req: Request, res: Response) {
    try {
      const client = await pool.connect()

      const sql = `UPDATE barang SET nama='${req.body.nama}', harga = ${req.body.harga} WHERE id = ${req.params.id}`

      await client.query(sql)
      client.release()

      res.status(201).send({
        status: 201,
        message: "Successfully Edit Barang"
      })

    } catch (e) {
      res.status(400).send(e)
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const client = await pool.connect()

      const sql = `DELETE FROM barang WHERE id = ${req.params.id}`

      await client.query(sql)
      client.release()
      res.status(200).send({
        status: 200,
        message: "Successfully Delete Barang"
      })

    } catch (e) {
      res.status(400).send(e)
    }
  }
}


export default ProductController;
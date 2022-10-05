import { Pool } from 'pg';

export default new Pool({
  database: "product",
  host: "103.176.79.182",
  port: 5432,
  password: "root",
  user: "root",
  keepAlive: true,
})

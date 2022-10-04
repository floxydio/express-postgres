import { Pool } from 'pg';

export default new Pool({
  database: "product",
  host: "localhost",
  port: 5432,
  password: "root",
  user: "root", 
  keepAlive: true,

})

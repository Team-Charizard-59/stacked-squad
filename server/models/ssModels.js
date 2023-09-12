import PG from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// console.log(PG)
const pool = new PG.Pool({
  connectionString: process.env.PG_URI
});

console.log(process.env.PG_URI);

export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
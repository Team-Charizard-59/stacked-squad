import Pool from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_URI
});


export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
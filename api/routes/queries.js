const pool = require('../modules/pool');

const getBook = (request, response) => {
    pool.query('SELECT * FROM book;', (error, results) => {
      if (error) {
       throw error;
      }else {
        response.status(200).json(results.rows);
      }
    })
  }
 
  module.exports = {
    getBook
  }
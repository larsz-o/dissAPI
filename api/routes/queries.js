const pool = require('../modules/pool');

const getBook = (request, response) => {
  pool.query('SELECT * FROM book;', (error, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json(results.rows);
    }
  })
}
const getChapters = (request, response) => {
  pool.query('SELECT * FROM chapters;', (error, results) => {
    if (error) {
      throw error;
    } else {
      response.status(200).json(results.rows);
    }
  })
}
const getSections = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM sections WHERE chapter_id = $1;', [id], (error, results) => {
    if (error){
      throw error;
    } else {
      response.status(200).json(results.rows);
    }
  })
}
module.exports = {
  getBook,
  getChapters,
  getSections
}
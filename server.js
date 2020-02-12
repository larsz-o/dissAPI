const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const db = require('./api/routes/queries');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/book', db.getBook);
app.use('/chapters', db.getChapters);
app.use('/sections', db.getSections);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.listen(port);

console.log('RESTful API server started on: ' + port);
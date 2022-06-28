const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
});

// GET /reviews/ -- returns list of all reviews for given product/Response = Status: 200 OK
app.get('/reviews', (req, res) => {
  res.status(200).send('Reviews');
});

// GET /reviews/meta -- returns review metadata for a given product/Response = Status: 200 OK
app.get('/reviews/meta', (req, res) => {
  res.status(200).send('Meta');
});

// POST /reviews -- adds a review for given product/Response = 201 CREATED
app.post('/reviews', (req, res) => {
  res.status(201).send('Created');
});

//! PUT /reviews/:review_id/helpful -- mark review helpful by review_id/Response = Status: 204 NO CONTENT
app.put('/reviews/:review_id/helpful', (req, res) => {
  res.status(204).send(req.params.review_id);
});

//! PUT /reviews/:review_id/report -- report a review by review_id/Response = Status: 204 NO CONTENT
app.put('/reviews/:review_id/report', (req, res) => {
  res.status(204).send(req.params.review_id);
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing

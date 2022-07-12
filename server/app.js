const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const models = require('./models');

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.get('/', function (req, res) {
  res.send('Hello World')
});

// GET /reviews/ -- returns list of all reviews for given product/Response = Status: 200 OK
app.get('/reviews', (req, res) => {
  const product_id = req.body.product_id;
  console.log('req.body.product_id', product_id);
  //! get data from db using req.body.product_id
  models.reviews.get([product_id], (results) => {
    //! send 'shaped' data back to client
    res.status(200).send(results);
  });

  //! reshape data for client

});

// GET /reviews/meta -- returns review metadata for a given product/Response = Status: 200 OK
app.get('/reviews/meta', (req, res) => {
  //! add review data to reviews table
  //! add photo data to photos table
  //! add characteristics to characteristics table
  res.status(200).send('Meta');
});

// POST /reviews -- adds a review for given product/Response = 201 CREATED
app.post('/reviews', (req, res) => {
  res.status(201).send('Created');
});

//! PUT /reviews/:review_id/helpful -- mark review helpful by review_id/Response = Status: 204 NO CONTENT
  // UPDATE reviews SET helpfulness=helpfulness+1 WHERE id = 1; -- WORKS!!!!
app.put('/reviews/:review_id/helpful', (req, res) => {
  res.status(204).send(req.params.review_id);
});

//! PUT /reviews/:review_id/report -- report a review by review_id/Response = Status: 204 NO CONTENT
  // UPDATE reviews SET reported=true WHERE id = req.body.review_id -- PROBABLY WORKS!!!!
app.put('/reviews/:review_id/report', (req, res) => {
  res.status(204).send(req.params.review_id);
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing

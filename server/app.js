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

// GET /reviews/ -- returns list of all reviews for given product/Response = Status: 200 OK
app.get('/reviews', (req, res) => {
  models.reviews.get([req.body.product_id], (results) => {
    //! reshape data for client
    // send 'shaped' data back to client
    res.status(200).send(results);
  });
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
app.put('/reviews/helpful', (req, res) => {
  // update record in db
  models.reviews.helpful([req.body.review_id], (results) => {
    // send confirmation back to client
    res.sendStatus(204);
  });
});

//! PUT /reviews/:review_id/report -- report a review by review_id/Response = Status: 204 NO CONTENT
  // UPDATE reviews SET reported=true WHERE id = req.body.review_id -- PROBABLY WORKS!!!!
app.put('/reviews/report', (req, res) => {
  console.log('[req.body.review_id]', [req.body.review_id]);
  // update record in db
  models.reviews.report([req.body.review_id], (results) => {
    // send confirmation back to client
    res.sendStatus(204);
  })
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing

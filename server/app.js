const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const models = require('./models');
const helperFunctions = require('./helperFunctions/index.js');

const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// GET /reviews/ -- returns list of all reviews for given product/Response = Status: 200 OK
app.get('/reviews', (req, res) => {
  models.reviews.get([req.body.product_id], (results) => {
    // reshape data for client
    let sortedResults = new helperFunctions.Reviews(results);
    sortedResults.orgResults();
    res.status(200).send(sortedResults);
  });
});

//! GET /reviews/meta -- returns review metadata for a given product/Response = Status: 200 OK
app.get('/reviews/meta', (req, res) => {
  res.status(200).send('Meta');
});

//! POST /reviews -- adds a review for given product/Response = 201 CREATED
app.post('/reviews', (req, res) => {
  //! add review data to reviews table
  //! add photo data to photos table
  //! add characteristics to characteristics table
  res.status(201).send('Created');
});

app.put('/reviews/helpful', (req, res) => {
  models.reviews.helpful([req.body.review_id], (results) => {
    res.sendStatus(204);
  });
});

app.put('/reviews/report', (req, res) => {
  models.reviews.report([req.body.review_id], (results) => {
    res.sendStatus(204);
  })
});

app.listen(port);
console.log("Reviews API Listening on port " + port);

module.exports = app; // export for testing

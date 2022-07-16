const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const models = require('./models');
const helperFunctions = require('./helperFunctions/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/reviews', (req, res) => {
  models.reviews.get([req.body.product_id], (results) => {
    let sortedResults = new helperFunctions.Reviews(results);
    sortedResults.orgResults();
    res.status(200).send(sortedResults);
  });
});

//! GET /reviews/meta -- returns review metadata for a given product/Response = Status: 200 OK
app.get('/reviews/meta', (req, res) => {
  res.status(200).send('Meta');
});

app.post('/reviews', (req, res) => {
  console.log('req.body', req.body);
  const params = [
    req.body.product_id,
    req.body.rating,
    req.body.summary,
    req.body.body,
    req.body.recomend,
    req.body.name,
    req.body.email
  ];

  models.reviews.postReview(params, (results) => {
    models.reviews.postPhotos(helperFunctions.createPhotosQuery(req.body.photos), (results) => {
      res.status(201).send('Created');
    })
  })

  //! add photo data to photos table
  //! add characteristics to characteristics table
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

module.exports = app;

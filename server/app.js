// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const models = require('./models');
const helperFunctions = require('./helperFunctions/index.js');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../public' )));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/reviews', (req, res) => {
  // console.log('req', req.query.product_id);
  models.reviews.get([req.query.product_id], (unstortedResults) => {
    let results = new helperFunctions.Reviews(unstortedResults, req.query.product_id);
    results.orgResults();
    res.status(200).send(results);
  });
});

app.get('/reviews/meta', (req, res) => {
  // console.log('req', req.query.product_id);
  models.reviews.metaRating([req.query.product_id], (metaRating) => {
    models.reviews.metaRecommend([req.query.product_id], (metaRecommend) => {
      let results = new helperFunctions.Meta({
        product_id: req.body.product_id,
        metaRating: metaRating,
        metaRecommend: metaRecommend[0]
      });
      results.orgRatings()
      res.status(200).send(results);
    });
  })
});

app.post('/reviews', (req, res) => {
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
    // results.insertId === last inserted id****
    res.status(201).send('Created');
    // add photo data to photos table
    // models.reviews.postPhotos([helperFunctions.createPhotosQuery(req.body.photos)], (results) => {})
  })
  // add characteristics to characteristics table
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

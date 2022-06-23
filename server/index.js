const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Sup World')
})

app.listen(3000)


// TODO:  GET /reviews/ -- returns list of all reviews for given product/Response = Status: 200 OK

// TODO: GET /reviews/meta -- returns review metadata for a given product/Response = Status: 200 OK

// TODO: POST /reviews -- adds a review for given product/Response = 201 CREATED

// TODO: PUT /reviews/:review_id/helpful -- mark review helpful by review_id/Response = Status: 204 NO CONTENT

// TODO: PUT /reviews/:review_id/report -- report a review by review_id/Response = Status: 204 NO CONTENT


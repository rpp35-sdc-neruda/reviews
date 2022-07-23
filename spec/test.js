const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/app.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Reviews API Server', () => {
  it('GET/reviews takes in a product id and returns its reviews', (done) => {
    chai.request(server).get('/reviews')
      .send({product_id: 4})
      .end((err, res) => {
        const expected = {
          "product": "4",
          "page": 0,
          "count": 3,
          "results": [
            {
              "review_id": 8,
              "rating": 4,
              "summary": "These pants are fine",
              "recommend": 0,
              "response": "null",
              "body": "I do like these pants",
              "date": "1970-01-25T05:00:00.000Z",
              "reviewer_name": "shopaddict",
              "helpfulness": 2,
              "photos": []
            },
            {
              "review_id": 9,
              "rating": 5,
              "summary": "These pants are great!",
              "recommend": 0,
              "response": "null",
              "body": "I really like these pants. Best fit ever!",
              "date": "1970-01-25T05:00:00.000Z",
              "reviewer_name": "figuringitout",
              "helpfulness": 2,
              "photos": [
                {
                  "url": "https://images.unsplash.com/photo-1542574621-e088a4464f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3028&q=80",
                  "id": 0
                },
                {
                  "url": "https://images.unsplash.com/photo-1560294559-1774a164fb0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                  "id": 1
                },
                {
                  "url": "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                  "id": 2
                }
              ]
            },
            {
              "review_id": 10,
              "rating": 2,
              "summary": "These pants are ok!",
              "recommend": 0,
              "response": "null",
              "body": "A little tight on the waist.",
              "date": "1970-01-25T05:00:00.000Z",
              "reviewer_name": "bigbrother",
              "helpfulness": 2,
              "photos": [
                {
                  "url": "https://images.unsplash.com/photo-1549812474-c3cbd9a42eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                  "id": 0
                },
                {
                  "url": "https://images.unsplash.com/photo-1560829675-11dec1d78930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
                  "id": 1
                },
                {
                  "url": "https://images.unsplash.com/photo-1559709319-3ae960cda614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                  "id": 2
                }
              ]
            }
          ]
        };
        expect(err).to.be.null;
        expect(res.body.results.product).to.equal(expected.results.product);
        expect(res.body.results.count).to.equal(expected.results.count);
        expect(res.body.results[0].body).to.equal(expected.results[0].body);
        expect(res.body.results[0].review_id).to.equal(expected.results[0].review_id);
        expect(res.body.results[0].rating).to.equal(expected.results[0].rating);
        expect(res.body.results[0].summary).to.equal(expected.results[0].summary);
        expect(res.body.results[0].recommend).to.equal(expected.results[0].recommend);
        expect(res.body.results[0].response).to.equal(expected.results[0].response);
        expect(res.body.results[0].reviewer_name).to.equal(expected.results[0].reviewer_name);
        expect(res.body.results[0].reviewer_name).to.equal(expected.results[0].reviewer_name);
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('GET/reviews/meta takes in a product id and returns reviews meta data', (done) => {
    chai.request(server).get('/reviews/meta')
    .send({product_id: 4})
    .end((err, res) => {
      const expected = {
        "product_id": 4,
        "recommend": {
          "0": 0
        },
        "ratings": {
          "2": 1,
          "4": 1,
          "5": 1
        },
        "characteristics": {}
      };
      expect(err).to.be.null;
      expect(res.status).to.equal(200);
      done();
    });
  });

  it('POST/reviews takes in review data and creates a new review', (done) => {
    chai.request(server).post('/reviews')
      .send({product_id: 2})
      .send({rating: 5})
      .send({summary: 'test'})
      .send({body: 'test body'})
      .send({recommend: true})
      .send({name: "Tyler"})
      .send({email: 'Nourse41@gmail.com'})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('PUT/helpfulnes takes in a review id and increments the records helpfulness value', (done) => {
    chai.request(server).put('/reviews/helpful')
      .send({review_id: 5774983})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(204);
        done();
      });
  });

  it('PUT/report takes in a review id and turns records reported true', (done) => {
    chai.request(server).put('/reviews/report')
      .send({review_id: 5774983})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(204);
        done();
      });
  });
});

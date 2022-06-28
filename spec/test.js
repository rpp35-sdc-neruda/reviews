//Require the dev-dependencies
const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/app.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Reviews API Server', () => {
  it('GET/ response with hello world content', (done) => {
    chai.request(server).get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Hello World');
        expect(res.status).to.equal(200);
        done();
      });
  });

  it('GET/reviews response with correct content', (done) => {
    chai.request(server).get('/reviews')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.text).to.equal('Reviews')
        expect(res.status).to.equal(200);
        done();
      });
  });
});

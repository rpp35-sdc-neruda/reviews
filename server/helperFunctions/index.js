// create a class for shaped review (cobined package & takes in reviews class objects)
// create a class for each review result (individual packages)

let Reviews = class {
  constructor (reviews) {
    this.product = reviews[0].product_id;
    this.page = 0;
    this.count = reviews.length;
    this.unsortedResults = reviews;
    this.results = [];
  }

  orgResults () {
    this.unsortedResults.forEach((unsortedResult) => {
      let result = new Review(unsortedResult);
      result.orgPhotos();
      this.results.push(result);
    });
    // delete unsortedResults to save space???
    delete this.unsortedResults;
  }
};

let Review = class {
  constructor (review) {
    this.review_id = review.id;
    this.rating = review.rating;
    this.summary = review.summary;
    this.recommend = review.recommend;
    this.response = review.response;
    this.body = review.body;
    this.date = review.date; //! convert date
    this.reviewer_name = review.reviewer_name;
    this.helpfulness = review.helpfulness;
    this.photos = [];
    this.urls = review.url;
  }

  orgPhotos () {
    if (this.urls !== null) {
      let urls = this.urls.split(',');
      urls.forEach((url, id) => {
        this.photos.push({url: url, id: id})
      })
    }
    // delete urls to save space
    delete this.urls;
  }
};

const convertDate = (unformatedDate) => {
  // do important stuff here....
}

module.exports.Reviews = Reviews;
// create a class for shaped review (cobined package & takes in reviews class objects)
// create a class for each review result (individual packages)

let Reviews = class {
  constructor (reviews, product_id) {
    this.product = product_id
    this.page = 0;
    this.count = reviews.length;
    this.unsortedResults = reviews;
    this.results = [];
  }

  orgResults () {
    this.unsortedResults.forEach((unsortedResult) => {
      if (unsortedResult.reported !== 1) {
        let result = new Review(unsortedResult);
        result.orgPhotos();
        this.results.push(result);
      };
    });
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
    this.date = this.convertDate(review.date);
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
    delete this.urls;
  }

  convertDate (isoDate) {
    const dateStr = new Date(isoDate).toLocaleString().split(',')[0].split('/');
    const date = new Date(dateStr);
    return date.toISOString();
  }
};

const Meta = class {
  constructor(results) {
    this.unsortedRatings = results.metaRating;
    this.product_id = results.product_id;
    this.recommend = {0: Number(results.metaRecommend.recommended)}
    this.ratings = {};
    this.characteristics = {};
  }

  orgRatings () {
    this.unsortedRatings.forEach((rating) => {
      this.ratings[rating.rating] = rating.count;
    })
  delete this.unsortedRatings;
  }
};

createPhotosQuery = (photos, lastInsertID) => {
  // (LAST_INSERT_ID(), ?)
  let results = photos.map((url) => {
   return `(LAST_INSERT_ID(), "${url}")`
  })
  // return string concat minus last digit
  return results.join(',')
};

module.exports.Meta = Meta;
module.exports.Reviews = Reviews;
module.exports.createPhotosQuery = createPhotosQuery;

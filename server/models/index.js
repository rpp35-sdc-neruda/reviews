// using connection created in db/index.js
const db = require('../db/index.js');

module.exports = {
  reviews: {
    get: (params, callback) => {
      console.log('db', db);
      console.log('db.dbConnection', db.dbConnection);
      let queryStr = 'SELECT reviews.*, GROUP_CONCAT(url ORDER BY photos.id) AS url FROM reviews LEFT JOIN \
                      photos ON reviews.id = photos.review_id WHERE product_id = 2 GROUP BY reviews.id;';
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR getting reviews by product_id', error);
        } else {
          callback(results);
        }
      });
  },
    // post: (callback) => {

    // }
  }
}


// using connection created in db/index.js
const db = require('../db/index.js');

module.exports = {
  reviews: {
    get: (params, callback) => {
      const queryStr = 'SELECT reviews.*, GROUP_CONCAT(url ORDER BY photos.id) AS url FROM reviews LEFT JOIN \
                      photos ON reviews.id = photos.review_id WHERE product_id = ? GROUP BY reviews.id ORDER BY helpfulness DESC;';

      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR getting reviews by product_id', error);
        } else {
          callback(results);
        }
      });
    },
    helpful: (params, callback) => {
      const queryStr = 'UPDATE reviews SET helpfulness=helpfulness+1 WHERE id = ?;';
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR incrementing helpfulness', error);
        } else {
          callback(results);
        }
      });
    },
    report: (params, callback) => {
      const queryStr = 'UPDATE reviews SET reported=true WHERE id = ?;';
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR reporting review', error);
        } else {
          callback(results);
        }
      });
    },
    postReview: (params, callback) => {
      const queryStr = `INSERT INTO reviews(product_id, rating, date, summary, body, recommend, reported, reviewer_name, \
                        reviewer_email, response, helpfulness) VALUES (?, ?, 2147483647, ?, ?, ?, 0, ?, ?, 'null', 0);`;
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR posting review', error);
        } else {
          callback(results);
        }
      })
    },
    postPhotos: (params, callback) => {
      const queryStr = 'INSERT INTO photos(review_id, url) VALUES ?;';
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('Error posting photos', error);
        } else {
          callback(results);
        }
      })
    },
    // postCategories: (params, callback) => {},
    metaRating: (params, callback) => {
      const queryStr = 'SELECT rating,COUNT(1) as count FROM reviews WHERE product_id = ? GROUP BY rating ORDER BY rating ASC;'
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR getting meta review data', error);
        } else {
          callback(results);
        }
      });
    },
    metaRecommend: (params, callback) => {
      const queryStr = 'SELECT SUM(recommend) AS recommended FROM reviews WHERE product_id = ?;';
      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR geting meta recommendation data', error);
        } else {
          callback(results);
        }
      })

    }
    // metaCategories: (params, callback) => {}
  }
}


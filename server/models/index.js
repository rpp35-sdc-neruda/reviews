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
    post: (params, callback) => {
      const queryStr = `INSERT INTO reviews(product_id, rating, date, summary, body, recommend, reported, reviewer_name, \
                        reviewer_email, response, helpfulness) VALUES (?, ?, 2147483647, ?, ?, 0, 0, ?, ?, 'null', 0);`;

      db.dbConnection.query(queryStr, params, (error, results) => {
        if (error) {
          console.log('ERROR posting review', error);
        } else {
          callback(results);
        }
      })
    }
    // meta: (params, callback) => {

    //}
  }
}


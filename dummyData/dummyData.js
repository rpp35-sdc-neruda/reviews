let orginalQueryResults = [
  {
    "id": 3,
    "product_id": 2,
    "rating": 4,
    "date": 2147483647,
    "summary": "I am liking these glasses",
    "body": "They are very dark.  But that's good because I'm in very sunny spots",
    "recommend": 0,
    "reported": 0,
    "reviewer_name": "bigbrotherbenjamin",
    "reviewer_email": "first.last@gmail.com",
    "response": "Glad you're enjoying the product!",
    "helpfulness": 5,
    "url": null
  },
  {
    "id": 4,
    "product_id": 2,
    "rating": 4,
    "date": 2147483647,
    "summary": "They look good on me",
    "body": "I so stylish and just my aesthetic.",
    "recommend": 0,
    "reported": 0,
    "reviewer_name": "fashionperson",
    "reviewer_email": "first.last@gmail.com",
    "response": "null",
    "helpfulness": 1,
    "url": null
  },
  {
    "id": 5,
    "product_id": 2,
    "rating": 3,
    "date": 2147483647,
    "summary": "I'm enjoying wearing these shades",
    "body": "Comfortable and practical.",
    "recommend": 0,
    "reported": 0,
    "reviewer_name": "shortandsweeet",
    "reviewer_email": "first.last@gmail.com",
    "response": "null",
    "helpfulness": 5,
    "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80,https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80,https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
  },
  {
    "id": 6,
    "product_id": 2,
    "rating": 5,
    "date": 2147483647,
    "summary": "I'm not a fan!",
    "body": "I don't like them",
    "recommend": 0,
    "reported": 0,
    "reviewer_name": "negativity",
    "reviewer_email": "first.last@gmail.com",
    "response": "Sorry to hear. Is there anything in particular you don't like?",
    "helpfulness": 0,
    "url": null
  },
  {
    "id": 7,
    "product_id": 2,
    "rating": 2,
    "date": 2147483647,
    "summary": "This product was ok!",
    "body": "They're fine but I wouldn't buy again.",
    "recommend": 0,
    "reported": 0,
    "reviewer_name": "anyone",
    "reviewer_email": "first.last@gmail.com",
    "response": "null",
    "helpfulness": 0,
    "url": null
  }
];

var product_2 = {
  "product": "2",
  "page": 0,
  "count": 5,
  "results": [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
        // ...
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": false,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
    // ...
  ]
};
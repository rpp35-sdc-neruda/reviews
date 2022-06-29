-- DROP DATABASE IF EXISTS chat;
CREATE DATABASE reviews_db;

USE reviews_db;

-- REVIEWS TABLE
  -- [X] id,
  -- [X] product_id,
  -- [X] rating,
  -- [ ] date,
  -- [X] summary,
  -- [X] body,
  -- [X] recommend
  -- [X] reported,
  -- [X] reviewer_name,
  -- [X] reviewer_email,
  -- [X] response,
  -- [X] helpfulness
CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  rating int NOT NULL,
  date int NOT NULL, -- auto create at time of entry
  summary varchar(60),
  body varchar(1000),
  recommend boolean,
  reported boolean,
  reviewer_name varchar(60),
  reviewer_email varchar(60),
  response varchar(1000),
  helpfulness int,
  PRIMARY KEY (id)
);

-- PHOTOS TABLE
  -- [X] id,
  -- [X] review_id,
  -- [X] url
CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  review_id int NOT NULL,
  url varchar(300),
  PRIMARY KEY (id)
);

-- CHARACTERISTICS_REVIEWS TABLE
  -- [X] id,
  -- [X] characteristic_id,
  -- [X] review_id,
  -- value
CREATE TABLE characteristics_reviews (
  id int NOT NULL AUTO_INCREMENT,
  characteristic_id int NOT NULL,
  review_id int NOT NULL,
  value int NOT NULL,
  PRIMARY KEY (id)
);

-- CHARACTERISTICS TABLE
  -- id,
  -- product_id,
  -- name
CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  name varchar(12),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
    mysql -u root < server/schema.sql
    to create the database and the tables. */

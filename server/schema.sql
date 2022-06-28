-- DROP DATABASE IF EXISTS chat;
CREATE DATABASE reviews_db;

USE reviews_db;

-- REVIEWS TABLE
  -- id,
  -- product_id,
  -- rating,
  -- date,
  -- summary,
  -- body,
  -- recommend
  -- reported,
  -- reviewer_name,
  -- reviewer_email,
  -- response,
  -- helpfulness
CREATE TABLE reviews (
  review_id int NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (ID),
);

-- PHOTOS TABLE
  -- id,
  -- review_id,
  -- url
CREATE TABLE photos (

);

-- CHARACTERISTICS_REVIEWS TABLE
  -- id,
  -- characteristic_id,
  -- review_id,
  -- value
CREATE TABLE characteristics_reviews (

);

-- CHARACTERISTICS TABLE
  -- id,
  -- product_id,
  -- name
CREATE TABLE characteristics (

);

-- CREATE TABLE messages (
--   id int NOT NULL AUTO_INCREMENT,
--   text varchar(200) NOT NULL,
--   userID int NOT NULL,
--   roomID int NOT NULL,
--   PRIMARY KEY (ID)
-- );

-- CREATE TABLE users (
--   id int AUTO_INCREMENT,
--   username varchar(40) NOT NULL,
--   PRIMARY KEY (ID)
-- );

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(40),
--   PRIMARY KEY (ID)
-- );


/*  Execute this file from the command line by typing:
    mysql -u root < server/schema.sql
    to create the database and the tables. */

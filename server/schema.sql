-- DROP DATABASE IF EXISTS chat;
CREATE DATABASE reviews_db;

USE reviews_db;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT, -- auto_increment for loaded data???
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

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  review_id int NOT NULL,
  url varchar(300),
  PRIMARY KEY (id)
);

CREATE TABLE characteristics_reviews (
  id int NOT NULL AUTO_INCREMENT,
  characteristic_id int NOT NULL,
  review_id int NOT NULL,
  value int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE characteristics (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  name varchar(12),
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
    mysql -u root < server/schema.sql
    to create the database and the tables. */

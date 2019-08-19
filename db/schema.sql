CREATE DATABASE burger_db;

USE BURGER_DB;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
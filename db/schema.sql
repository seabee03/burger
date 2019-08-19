DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger_menu (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    burger_description TEXT NULL,
    burger_price DECIMAL (10, 2) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    burger_price DECIMAL(10, 2) NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
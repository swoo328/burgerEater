CREATE DATABASE eat_hamburgers_db;
USE eat_hamburgers_db;

CREATE TABLE hamburgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
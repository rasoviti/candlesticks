CREATE DATABASE IF NOT EXISTS db_candlesticks;
USE db_candlesticks;

CREATE TABLE IF NOT EXISTS candlesticks(
	id INT AUTO_INCREMENT PRIMARY KEY,
	moeda VARCHAR(50),
	periodicidade VARCHAR(15),
	datetime DATETIME,
	open DOUBLE,
	low DOUBLE,
	high DOUBLE,
	close DOUBLE
);
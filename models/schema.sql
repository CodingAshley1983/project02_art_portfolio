-- DROP DATABASE IF EXISTS portfolio_db;
-- CREATE DATABASE portfolio_db;

-- USE portfolio_db;

CREATE TABLE Artwork
(
	id int NOT NULL AUTO_INCREMENT,
	title varchar(160) NOT NULL,
	description varchar(255) NULL,
	dateCreated date NULL,
    imgURL varchar(255) NOT NULL,
	category varchar(160) NULL,
    price float(20,2) NULL,
    size varchar(50) NULL,
    medium varchar(50) NULL,
    artist varchar(50) NULL,
    onCarousel boolean NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE CommissionRequests
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(160) NOT NULL,
	requestDetails text NOT NULL,
    referenceImgURL varchar(255) NULL,
    phone varchar(20) NULL,
    email varchar(100) NOT NULL,
    medium varchar(50) NULL,
    artist varchar(50) NULL,
	PRIMARY KEY (id)
);


INSERT INTO Artwork (title, description, dateCreated, imgURL, category, price, size, medium, artist, onCarousel) 
values ('Adam West', 'Adam West revealing Batman logo on chest.', '2017-02-10', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/adam_west_batman.jpg?alt=media&token=6fa6ee9e-3d07-4165-853e-fb4b1b2ccccb', 'Batman', 70.00, '1609px x 2048px', 'Digital', 'CJ Frei', 0),
('Batman from the Ages', 'A series of all the different live action Batmans through the years.', '2017-02-10', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/allBatmanLive.jpg?alt=media&token=25424a2c-8895-41ef-a76d-86ffa0fa178d', 'Batman', 70.00, '1302px x 919px', 'Digital', 'CJ Frei', 0),
('Batman w/ Joker Batterang', 'Batman holding a batterrang with Jokers name on it.', '2017-02-10', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/batman_joker_card.jpg?alt=media&token=bdb6aef9-6c67-4a40-a0e0-2122c059cc9b', 'Batman', 70.00, '1363px x 908px', 'Digital', 'CJ Frei', 0),
('Joker holding Batman card', 'Joker holding card with Batman image on it.', '2017-02-10', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/joker_batman_card.jpg?alt=media&token=5dc4e023-6757-4d2f-8372-65b2d3c174f2', 'Batman', 70.00, '1363px x 908px', 'Digital', 'CJ Frei', 0),
('Joker Depictions', 'Various depictions of the Joker.', '2016-05-18', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/jokers.jpg?alt=media&token=0f6a32f3-132e-4b2d-b7a1-72833f73b627', 'Batman', 70.00, '1363px x 851px', 'Digital', 'CJ Frei', 0),
('Kurt Cobain', 'Kurt Cobain Nirvana vocalist.', '2018-08-23', 'https://firebasestorage.googleapis.com/v0/b/art-portfolio-project02.appspot.com/o/nirvana.jpg?alt=media&token=d2309f06-ff2d-48d7-aa4f-ee95075aec4a', 'Music', 70.00, '1363px x 905px', 'Digital', 'CJ Frei', 1)
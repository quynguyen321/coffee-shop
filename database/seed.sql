-- CREATE TABLE product
-- ( order_id SERIAL PRIMARY KEY, 
-- product_name VARCHAR(200), 
-- image VARCHAR(200),
-- price FLOAT NOT NULL );



INSERT INTO product (product_name, image, price) VALUES 
('morning coffee','https://coffee-shop1.s3.us-east-2.amazonaws.com/img/item-1.jpg',9.99 ),
('black coffee', 'https://coffee-shop1.s3.us-east-2.amazonaws.com/img/item-2.jpg',8.99),
('coffee of the day','https://coffee-shop1.s3.us-east-2.amazonaws.com/img/item-3.jpg',9.99),
('coffee with bread','https://coffee-shop1.s3.us-east-2.amazonaws.com/img/item-4.jpg',12.99),
('morning coffee with bread','https://coffee-shop1.s3.us-east-2.amazonaws.com/img/item-5.jpg',13.99);



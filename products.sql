CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INTEGER(10) NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga mat", "sport supplies", 85, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bolster", "sport supplies", 60, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga pants", "active wear", 60, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("yoga tank top", "active wear", 55, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("water bottle", "accessories", 15, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("face mask", "accessories", 30, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("essential oil blend", "cosmetics", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Art of Yoga", "books", 35, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Sutras", "books", 25, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guided Meditations", "audio", 40, 50);




require('dotenv').config()
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.DB_PASSWORD,
  database: "bamazon_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", (err, data) => {
    if (err) throw err;
    // prints the results in an array
    console.table(data);
    askQuestions(data);
    // connection.end();
  });
}

function askQuestions(inventory) {
  inquirer.prompt([
    {
      type: "input",
      message: "What product ID would you like to buy?",
      name: "productID"
    }
  ]).then(function (answer) {
    console.log(answer);
    var id = parseInt(answer.productID);
    var product = checkforId(id, inventory);
    if (product) {
      askForQuantity(product);
    }
    else {
      console.log("Please select a correct product ID from the table.");
      afterConnection();
    }
  });
}

function checkforId(id, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id == id) {
      return inventory[i];
    }
  }
}

function askForQuantity(product) {
  inquirer.prompt([
    {
      type: "input",
      message: "How many " + product.product_name + "(s) would you like to purchase?",
      name: "quantity"
    }
  ]).then(function (answer) {
    var quantityEntered = parseInt(answer.quantity);
    if (quantityEntered > product.stock_quantity) {
      console.log("Sorry, we have insufficient product inventory and cannot fulfill your order at this time.");
      console.log("Please select quantity that is within the available quantity range.")
      afterConnection();
    }
    else {
      makePurchase(product, quantityEntered);
    }
  })
}

function makePurchase(product, quantityEntered) {
  connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [
      quantityEntered, product.item_id
    ], function (err, response) {
      if (err) throw err
      console.log("You have successfully purchased " + quantityEntered + " " + product.product_name + "(s).");
      console.log("You can now place another order. Select a product you would like to procure from the table below:")
      afterConnection();
    });
}
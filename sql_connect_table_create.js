var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bender123",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE products (item_id INT, product_name VARCHAR(50), department_name VARCHAR(50), price DECIMAL(10,2), stock_quantity VARCHAR(20),PRIMARY KEY(item_id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

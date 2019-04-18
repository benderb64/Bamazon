var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "quickstar189",
  database: "bamazon"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (1, 'Samsung TV', 'Electronics', 200.00, 72)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

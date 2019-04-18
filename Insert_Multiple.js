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
  var sql = "INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ?";
  var values = [
    [2, 'Lenovo Laptop', 'Electronics', 200.00, 72],
    [3, 'L.L. Bean Boots', 'Apparrel', 80.00, 60],
    [4, 'H&M Sweater', 'Apparrel', 30.00, 25],
    [5, 'Electric Drill', 'Tools', 200.00, 50],
    [6, 'Headphones', 'Electronics', 40.00, 80],
    [7, 'Coffee Beans', 'Food', 20.00, 40],
    [8, 'Sunglasses', 'Apparrel', '20.00', 90],
    [9, 'Grey Goose Vodka', 'Alcohol', 30.00, 80],
    [10, 'Red Dead Redemption 2', 'Electronics', 60.00, 100],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

console.log(result.affectedRows)
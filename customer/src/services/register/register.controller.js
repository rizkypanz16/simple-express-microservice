const connection = require("../../config/database");

exports.postRegister = (req, res) => {
  let query =
    "INSERT INTO customer (customer_name, customer_email, customer_phone, customer_address) VALUES ('" +
    req.body.customerName +
    "', '" +
    req.body.customerEmail +
    "', '" +
    req.body.customerPhone +
    "', '" +
    req.body.customerAddress +
    "')";
  try {
    connection.query(query, (error, results) => {
      if (!error) {
        res.status(200);
        res.json({
          code: 200,
          status: "Success",
          message: "Data Berhasil Di Upload",
        });
      } else {
        console.error(error);
        res.status(500).json({
          code: 500,
          status: "Error",
          message: "Internal Server Error",
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

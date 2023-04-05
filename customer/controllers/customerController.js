exports.getCustomer = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "GET",
          "API": "customer",
          "data": []
          }
      );
}

exports.getCustomerId = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "GET",
          "API": "customer/customerId",
          "data": []
          }
      );
}

exports.putCustomer = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "PUT",
          "API": "customer/customerId",
          "data": []
          }
      );
}

exports.deleteCustomer = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "DELETE",
          "API": "customer/customerId",
          "data": []
          }
      );
}
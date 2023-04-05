exports.postRegister = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "API": "customer/register"
          }
    );
}
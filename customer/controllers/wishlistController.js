exports.getWishlist = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "GET",
          "API": "wishlist",
          "data": []
          }
      );
}

exports.getWishlistId = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "GET",
          "API": "wishlist/wishlistId",
          "data": []
          }
      );
}

exports.postWishlist = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "POST",
          "API": "wishlist",
          "data": []
          }
      );
}

exports.putWishlist = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "PUT",
          "API": "wishlist/wishlistId",
          "data": []
          }
      );
}

exports.deleteWishlist = (req, res) => {
    res.json(
        {
          "status": true,
          "code": 200,
          "message": "SUCCESS",
          "method": "DELETE",
          "API": "wishlist/wishlistId",
          "data": []
          }
      );
}
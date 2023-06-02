import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap/";
import { React, useEffect, useState } from "react";
import axios from "axios";

function Cardproducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  });

  // fetch data from customers service api
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.8.155:8002/api/products"
      );
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("500 Internal Server Error from Products Service ");
      setLoading(false);
    }
  };
  return (
    <Container className="mt-4 mb-2">
      <Row>
        <Col>
          {loading ? (
            <p>loading ...</p>
          ) : (
            <div>
              {data.map((data) => (
                <div key={data.productId}>
                  <Card style={{ width: "18rem" }} className="mt-4 mb-2">
                    <Card.Img
                      variant="top"
                      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1885fe5f9bd%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1885fe5f9bd%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    />
                    <Card.Body>
                      <Card.Title>{data.productName}</Card.Title>
                      <Card.Text>
                        <Badge bg="secondary">New</Badge> Rp.{data.productPrice}
                      </Card.Text>
                      <Card.Text>{data.productDescription}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Cardproducts;

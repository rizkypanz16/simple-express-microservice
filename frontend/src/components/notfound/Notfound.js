// import bootstrap
import "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function Notfound() {
  return (
    <Container className="h-100">
      <Row className="h-100 d-flex justify-content-center align-items-center vh-100">
        <Col>
          <h1 className="text-center" style={{ fontSize: "150px" }}>
            404
          </h1>
          <h1 className="text-center h3">Not Found</h1>
          <h1 className="text-center lead">
            The Resource requested could not found on this server!
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Notfound;

import { Breadcrumb, Container, Row, Col } from "react-bootstrap/";

function Homebreadcrumb() {
  var currentPath = window.location.pathname;
  if (currentPath !== "/") {
    currentPath = currentPath.substring(1);
    currentPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <Breadcrumb
              style={{
                paddingLeft: "15px",
                paddingTop: "12px",
                paddingBottom: "0.5px",
                borderRadius: "8px",
                backgroundColor: "#eff1f4",
              }}
            >
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>{currentPath}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <Breadcrumb
              style={{
                paddingLeft: "15px",
                paddingTop: "12px",
                paddingBottom: "0.5px",
                borderRadius: "8px",
                backgroundColor: "#eff1f4",
              }}
            >
              <Breadcrumb.Item href={currentPath} active>
                Home{" "}
              </Breadcrumb.Item>
              <Breadcrumb.Item active> </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Homebreadcrumb;

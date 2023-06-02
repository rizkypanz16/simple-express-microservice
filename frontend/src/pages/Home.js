import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
// import component
import Topnavbar from "../components/topnavbar/Topnavbar";

import Homebreadcrumb from "../components/home-breadcrumb/Homebreadcrumb";

function Home() {
  const currentPath = window.location.pathname;
  return (
    <div>
      <Topnavbar />
      <Homebreadcrumb />
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Dashboard Service {currentPath}</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

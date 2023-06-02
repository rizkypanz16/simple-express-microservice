import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
// import component
import Topnavbar from "../components/topnavbar/Topnavbar";
import Homebreadcrumb from "../components/home-breadcrumb/Homebreadcrumb";
import Cardproducts from "../components/cardproducts/Cardproducts";

function Products() {
  return (
    <div>
      <Topnavbar />
      <Homebreadcrumb />
      <Cardproducts />
    </div>
  );
}

export default Products;

import React from "react";
// import bootstrap
import { Container, Nav, Navbar } from "react-bootstrap/";
// import react-icons
import { FcParallelTasks } from "react-icons/fc";

function Topnavbar() {
  const currentPath = window.location.pathname;
  const navBrandText = "   Simple Microservice";
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FcParallelTasks size={30} />
          {navBrandText}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" active={currentPath === "/"}>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/customers" active={currentPath === "/customers"}>
              Customers
            </Nav.Link>
            <Nav.Link href="/products" active={currentPath === "/products"}>
              Products
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export Navbar component
export default Topnavbar;

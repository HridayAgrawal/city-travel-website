import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cards from "./Cards";
import Form from "./Form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Header from "./Header";
function Navigation() {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home" style={{ paddingRight: "830px" }}>
              Travel <i class="fas fa-plane-departure"></i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ fontSize: "1.2rem" }}>
                <Nav.Link
                  className="mx-3"
                  href="#home"
                  style={{ color: "black" }}
                >
                  <Link
                    to="/"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Home{" "}
                  </Link>
                  <i class="fas fa-home"></i>
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  href="#events"
                  style={{ color: "black" }}
                >
                  Events
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  href="#Register"
                  style={{ color: "black" }}
                >
                  <Link
                    to="/form"
                    style={{
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Register
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Router path="/home"></Router>

          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Navigation;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar bg="dark" variant="dark" key={expand} expand={expand}>
          <Container fluid>
            <Link to="/">
              {" "}
              <img
                src="https://cromidi.cafe24.com/netflix/netflix.png"
                width={100}
              />
            </Link>
            <Navbar.Offcanvas>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-item">
                    Home
                  </Link>
                  <Link to="/movie" className="nav-item">
                    Movies
                  </Link>
                  <Link to="/" className="nav-item">
                    TV
                  </Link>
                  <Link to="/" className="nav-item">
                    Sports
                  </Link>
                  <Link to="/" className="nav-item">
                    Entertainment
                  </Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;

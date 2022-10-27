import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { publicRoutes } from "../../routes";
import { images } from "../../asset";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid="md">
        <Navbar.Brand as={Link} to="/">
          <img src={images.logoNeFlix} alt="logo" width={100} />
        </Navbar.Brand>

        <Nav className="me-auto d-none d-lg-flex">
          {publicRoutes.map((route, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link as={Link} to={route.path}>
                  {route.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>

        <Nav className="me-auto d-flex d-lg-none">
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            {publicRoutes.map((route, index) => {
              return (
                <Nav.Item key={index}>
                  <NavDropdown.Item as={Link} to={route.path}>
                    {route.name}
                  </NavDropdown.Item>
                </Nav.Item>
              );
            })}
          </NavDropdown>
        </Nav>

        <Nav className="ms-auto">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-bottom`}>Tooltip on</Tooltip>}
          >
            <Button variant="dark">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-bottom`}>Tooltip on</Tooltip>}
          >
            <Button variant="dark">
              <FontAwesomeIcon icon={faBell} />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id={`tooltip-bottom`}>Tooltip on</Tooltip>}
          >
            <Button variant="dark">
              <FontAwesomeIcon icon={faUser} />
            </Button>
          </OverlayTrigger>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

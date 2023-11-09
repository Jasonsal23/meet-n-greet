import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Meet'n'Greet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
 
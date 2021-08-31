import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Latex from 'react-latex-next'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="green" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    Gamma Online Judge
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#contests">Contests</Nav.Link>
                    <Nav.Link href="#pricing">Problems</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Header;
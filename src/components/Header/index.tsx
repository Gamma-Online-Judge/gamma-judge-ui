import { Container, Nav, Navbar as _Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Navbar = styled(_Navbar)`
    background-color: #243119
`

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
                    <Nav.Link href="/contests">Contests</Nav.Link>
                    <Nav.Link href="/problems">Problems</Nav.Link>
                    <Nav.Link href="/login">Entrar</Nav.Link>
                    <Nav.Link href="/signup">Cadastrar</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Header;
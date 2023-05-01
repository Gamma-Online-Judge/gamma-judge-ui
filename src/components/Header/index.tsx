import { useContext } from 'react';
import { Container, Nav, Navbar as _Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = styled(_Navbar)`
    background-color: #243119
`

const Header = () => {

    const auth = useContext(AuthContext);
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
                </Nav>
                <Nav className="justify-content-end">
                    {
                        auth.isAuthenticated? 
                        (
                            <Nav.Link onClick={auth.logout}>Logout</Nav.Link>
                        ) : 
                        (
                        <>
                            <Nav.Link href="/login">Entrar</Nav.Link>
                            <Nav.Link href="/signup">Cadastrar</Nav.Link>
                        </>
                        )
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};
export default Header;
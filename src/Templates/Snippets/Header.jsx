import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-dark bg-dark bg-gradient">
            <Container>
                <Navbar.Brand href="#">YTS Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>


                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
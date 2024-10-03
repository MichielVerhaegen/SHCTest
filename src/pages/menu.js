import { NavItem } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
  return (    
    <header>
        {/* <Navbar expand="lg" className="bg-body-tertiary"> */}
        <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        {/* <Navbar.Brand href="#home">SHC</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Administratie</Nav.Link> */}
            {/* <Nav.Link href="#link">Facturatie</Nav.Link> */}
            <NavDropdown title="ADMINISTRATIE" id="basic-nav-dropdown" className='MenuItem textfont'>
                <NavDropdown.Item href="\viewhotel" className='NavDropdownItem'>View hotels</NavDropdown.Item>
                <NavDropdown.Item href="\createhotel" className='NavDropdownItem'>Create hotel</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">View Room</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Create Room</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">View room types</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Create room type</NavDropdown.Item>
            </NavDropdown>
              
            <NavDropdown title="FACTURATIE" id="basic-nav-dropdown" className='MenuItem textfont'>
                <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Menu 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Menu 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Menu 4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Menu 5</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Menu 6</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="EMPLOYEES" id="basic-nav-dropdown" className='MenuItem textfont'>
                <NavDropdown.Item href="#action/3.1">Menu 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Menu 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Menu 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Menu 4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Menu 5</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Menu 6</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>    

  )
};

export default Menu;
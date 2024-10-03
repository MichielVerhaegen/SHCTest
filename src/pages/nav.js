import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { checktoken } from '../dbconnector/checktoken';
import '../App.css';




const logout = () => {
  
  console.log(document.cookie)
  document.cookie = "logintoken=";

}

const Navigatie = () => {
  
  const [rights, setRights] = useState('');
  const account = checktoken()

  account.then(res => {
    setRights(res.Rights)
    return res.Rights
  })

  /*    #region previous nav    <Navbar expand="lg" fixed='top' className='TopNavigatie' >

          <Navbar.Brand href="#home">
            <img className='Brandlogo'
              src="/img/Logo_stars.png"

              alt="SHC logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img className='Brandlogo'
              id="SubMenuIcon"
              src="/img/icoCleaningTasks.png"
              height={32}
              alt="SHC logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <NavDropdown title="ADMINISTRATIE" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item href="\hotels" className='NavDropdownItem'>View hotels</NavDropdown.Item>
                <NavDropdown.Item href="\createhotel" className='NavDropdownItem'>Create hotel</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">View Rooms</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Create Room</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">View room types</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Create room type</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="FACTURATIE" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.1">Menu 1</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.1">Menu 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Menu 3</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Menu 4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Menu 5</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Menu 6</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="EMPLOYEES" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item className='NavDropdownItem' href="/employees">All Employees</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.1">Menu 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Menu 3</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Menu 4</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Menu 5</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Menu 6</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={logout} href='/' className='menucontainer'>LOG-OUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        #ENDREGION */

  if (rights === 2) {

    return (
      <header>

        <Navbar expand="lg" fixed='top' className='TopNavigatie' >

          <Navbar.Brand href="/home">
            <img className='Brandlogo'
              src="/img/Logo_stars.png"

              alt="SHC logo"
              
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img className='Brandlogo'
              id="SubMenuIcon"
              src="/img/icoCleaningTasks.png"
              height={32}
              alt="SHC logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <NavDropdown title="ADMINISTRATIE" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item href="\hotels" className='NavDropdownItem'>View hotels</NavDropdown.Item>
                <NavDropdown.Item href="\createhotel" className='NavDropdownItem'>Create hotel</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">View Rooms</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.2">Create Room</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">View room types</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.4">Create room type</NavDropdown.Item>                
              </NavDropdown>

              <NavDropdown title="FACTURATIE" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item className='NavDropdownItem' href="#action/3.1">Menu 1</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="EMPLOYEES" id="basic-nav-dropdown" className='menucontainer'>
                <NavDropdown.Item className='NavDropdownItem' href="/employees">All Employees</NavDropdown.Item>
                <NavDropdown.Item className='NavDropdownItem' href="/checkins">Employee Check-ins</NavDropdown.Item>

              </NavDropdown>

              <Nav.Link onClick={()=>logout()} href='/' className='menucontainer'>LOG-OUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


      </header>

    )
  } else if (rights === 1) {
    return (
      <header>
        <Navbar expand="lg" fixed='top' className='TopNavigatie' >

          <Navbar.Brand href="/cleaner">
            <img className='Brandlogo'
              src="/img/Logo_stars.png"

              alt="SHC logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img className='Brandlogo'
              id="SubMenuIcon"
              src="/img/icoCleaningTasks.png"
              height={32}
              alt="SHC logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">

              <Nav.Link href="/cleaner" className='menucontainer'>CLEANER</Nav.Link>
              <Nav.Link onClick={()=>logout()} href='/' className='menucontainer'>LOG-OUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header >
    )
  }
}
//

export default Navigatie;
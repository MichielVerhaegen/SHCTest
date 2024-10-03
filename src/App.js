import './theme.scss';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import Startpage from "./pages/Startpage";
import { useState } from 'react'
import Application from './pages/application';
import { Createhotel, Viewhotels, HotelView } from './pages/hotel'
import Navigatie from "./pages/nav";
import { ConstructEmployeePage, Addemployee } from './pages/employee';
import Cleaner from './pages/cleaner';
import MyData from './pages/mydata';
import { checkloggedinstatus } from "./pages/login"
import { Constructcheckinpage } from './pages/checkinpage';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  const tokenresponse = checkloggedinstatus(setLoggedIn)
  tokenresponse.then(response => {

    if (response) {

      setEmail(response);
      setLoggedIn(true);
    }

  })
  return (
    <>

      <div>
        <div className="LeftTop" href="\home"><img src="./img/logo_stars.png" alt="" /></div>
        <div className="TopNavigatie"><Navigatie></Navigatie></div>
      </div>
      <div>
        <div className="LeftMenu">
          {/* <Menu></Menu> */}
        </div>
      </div>
      <div className="App" id="App">
        
          <Routes>
            <Route
              path="/"
              element={<Startpage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
            <Route path="/home" element={<Application loggedIn={loggedIn} email={email} />} />
            <Route path="/createhotel" element={<Createhotel loggedIn={loggedIn} email={email} />} />
            <Route path="/hotels" element={<Viewhotels />} />
            <Route path="/hotels/:id" element={<HotelView />} />
            <Route path="/employees" element={<ConstructEmployeePage />} />
            <Route path="/create-employee" element={<Addemployee />} />
            <Route path="/cleaner" element={<Cleaner />} />
            <Route path="/mydata" element={<MyData />} />
            <Route path="/checkins" element={<Constructcheckinpage />} />
          </Routes>
      </div>


    </>







    //<div className="App">



    /* <header className="header">
      
    <Navbar expand="lg" className=".bg-nav">
    <Container>
      <Navbar.Brand href="#home">HSC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        


    </header> */


    //</div>
  );
}



export default App;

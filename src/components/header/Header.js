import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#404041' }}>
        {/* FCB813 yellow */}
        <Container>
          <Navbar.Brand href='#home'>
            <p style={{ color: 'white',fontSize:"16px" }}>contact@valleyac-consulting.com</p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar
        style={{ height: '100px', backgroundColor: 'whitesmoke' }}
        expand='lg'
      >
        <Container fluid>
          <Navbar.Brand href='#'>
            <img src={logo} width='250px' alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto  my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='#action1'>Accueil</Nav.Link>
              <NavDropdown title='Nos Formations' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Partenariat' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='À propos' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#'>Contact</Nav.Link>
            </Nav>

            <Button variant='outline-dark'>Votre Compte</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

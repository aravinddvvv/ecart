import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Header() {

  const wishlist = useSelector((state) => state.wishlistreducer)
  const cart =useSelector((state)=>state.cartReducer)
  return (
    <div className='mb-3'>
      <Navbar expand="lg" style={{ zIndex: 1 }} className="bg-primary fixed-top ">
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} ><i class="fa-solid fa-cart-shopping"></i> E-Cart</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link ><Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-heart"></i>Wishlist <Badge bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
              <Nav.Link ><Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-cart-shopping"></i>Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
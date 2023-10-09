import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    const alldata = useSelector(state => state.productReducer.product);
    // console.log("lasm", alldata);

    return (
        <>
            <Navbar expand="lg" className="bg-dark">
                <Container className=''>
                    <Navbar.Brand href="#home" className='text-white'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <Link className='text-white me-2 text-decoration-none' to='/'>Home</Link>
                        </Nav>
                            <Link className='text-white text-decoration-none me-2' to='/cart'><i class="fa-solid fa-cart-shopping cart"></i></Link>
                            <h2 className='header'>{alldata.length}</h2>
                            <Link className='text-white me-5 text-decoration-none' to='/bGita'>Bhagvat Gita</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
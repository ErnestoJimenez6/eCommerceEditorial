/* eslint-disable react/prop-types */
import CartWidget from'../CartWidget/CartWidget'
import NavBarLink from'./NavBarLink'
import logo from'../../assets/logo.png'
import{categories}from'../../mock/mockData'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import Navbar from'react-bootstrap/Navbar'
import Offcanvas from'react-bootstrap/Offcanvas'

const NavBar=()=>{
    return(
        <>
            <Navbar expand='lg' className='mb-3' data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Brand href='#'>
                        <img src={logo} alt='Logo' height='100' className='d-inline-block'/>
                        Editorial Mar Negro
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar'/>
                    <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end' className='text-bg-dark'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>
                                <img src={logo} alt='Logo' height='100' className='d-inline-block'/>
                                Editorial Mar Negro
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-around flex-grow-1 pe-3'>
                                {categories.map((element,index)=>(
                                    <NavBarLink key={index} category={element}/>
                                ))}
                            </Nav>
                            <CartWidget/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
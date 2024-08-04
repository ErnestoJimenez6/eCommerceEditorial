/* eslint-disable react/prop-types */
import CartWidget from'../CartWidget/CartWidget'
import NavBarLink from'./NavBarLink'
import logo from'../../assets/logo.png'
import{genres}from'../../mock/mockData'
import{Container,Nav,Navbar,Offcanvas}from'react-bootstrap'

const NavBar=()=>{
    return(
        <>
            <Navbar expand='lg' className='navbar navbar-expand-lg mb-3' data-bs-theme='dark'>
                <Container fluid>
                    <Navbar.Brand href='#'>
                        <img src={logo} alt='Logo' height='100' className='d-inline-block align-top'/>
                        Editorial Mar Negro
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar'/>
                    <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasDakNavbarLabel'>
                                <img src={logo} alt='Logo' height='100' className='d-inline-block align-top'/>
                                Editorial Mar Negro
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className='justify-content-around flex-grow-1 pe-3'>
                                {genres.map((element, index)=>(
                                    <NavBarLink key={index} genre={element}/>
                                ))}
                            </Nav>
                            <CartWidget/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {/*<nav className='navbar navbar-expand-lg' data-bs-theme='dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' href='#'>
                        <img src={logo} alt='Logo' height='100'/>Editorial Mar Negro
                    </Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                    className='offcanvas offcanvas-end text-bg-dark' tabIndex='-1' id='offcanvasDarkNavbar' aria-labelledby='offcanvasDarkNavbarLabel'>
                        <div className='offcanvas-header'>
                            <Link className='navbar-brand offcanvas-title' id='offcanvasDarkNavbarLabel' href='#'>
                                <img src={logo} alt='Logo' height='100'/>Editorial Mar Negro</Link>
                            <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                        </div>
                        <div className='offcanvas-body'>
                            <ul className='navbar-nav justify-content-around flex-grow-1 pe-3'>
                                {genres.map((element,index)=>{
                                    return <NavBarLink key={index} genre={element}/>
                                })}
                            </ul>
                            <CartWidget/>
                        </div>
                    </div>
                </div>
            </nav>*/}
        </>
    )
}

export default NavBar
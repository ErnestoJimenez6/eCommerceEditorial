/* eslint-disable react/prop-types */
import CartWidget from'../CartWidget/CartWidget'
import NavBarLink from'./NavBarLink'
import logo from'../../assets/logo.png'
import{genres}from'../../mock/mockData'

const Navbar=()=>{
    return(
        <>
            <nav className='navbar navbar-expand-lg' data-bs-theme='dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src={logo} alt='Logo' height='100'/>Editorial Mar Negro
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                    className='offcanvas offcanvas-end text-bg-dark' tabIndex='-1' id='offcanvasDarkNavbar' aria-labelledby='offcanvasDarkNavbarLabel'>
                        <div className='offcanvas-header'>
                            <a className='navbar-brand offcanvas-title' id='offcanvasDarkNavbarLabel' href='#'>
                                <img src={logo} alt='Logo' height='100'/>Editorial Mar Negro</a>
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
            </nav>      
        </>
    )
}

export default Navbar
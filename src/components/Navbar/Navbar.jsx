/* eslint-disable react/prop-types */
import CartWidget from'../CartWidget/CartWidget'
import NavBarLink from'./NavBarLink'
import logo from'../../assets/logo.png'


const Navbar=({genres})=>{
    return(
        <>
            <nav className='navbar navbar-expand-lg' data-bs-theme='dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src={logo} alt='Logo' height='100'/>Editorial Mar Negro
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='offcanvas offcanvas-end justify-content-around' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
                        <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>Editorial Mar Negro</h5>
                        <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                        {/* CONTINUAR CON offCanvasNavBar */}
                        <ul className='navbar-nav w-100 justify-content-around'>
                            {genres.map((element,index)=>{
                                return <NavBarLink key={index} genre={element}/>
                            })}
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>      
        </>
    )
}

export default Navbar
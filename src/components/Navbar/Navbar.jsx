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
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-around' id='navbarNav'>
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
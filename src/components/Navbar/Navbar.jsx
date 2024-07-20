import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
{/*import { categories } from '../../asyncMock/asyncMock'

const NavBar = ({ title }) => {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex" to="/">
                    <img src='/src/assets/logo.png' alt="Logo" height="100" className="d-inline-block" />
                    <h2>{title}</h2>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        {categories.map((category, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {category}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}*/}

const NavBar=()=>{
    return(
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Editorial Mar Negro</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`category/cienciaFiccion`} className={({isActive})=>isActive?'ActiveOption':'Option'}>Ciencia Ficción</NavLink>
                <NavLink to={`category/fantasia`} className={({isActive})=>isActive?'ActiveOption':'Option'}>Fantasía</NavLink>
                <NavLink to={`category/terror`} className={({isActive})=>isActive?'ActiveOption':'Option'}>Terror</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
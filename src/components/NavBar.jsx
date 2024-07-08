//import CartWidget from './CartWidget.jsx';
import Navitem from './NavItem.jsx'

const NavBar = () => {
    return (
        //<nav className="navbar">
        //<div className="navbar-brand">BookStore</div>
        //<ul className="navbar-nav">
        //    <li className="nav-item">Ciencia Ficción</li>
        //    <li className="nav-item">Fantasía</li>
        //    <li className="nav-item">Terror</li>
        //</ul>
        //<CartWidget />
        //</nav>
        <>
            <ul>
                <Navitem />
                <Navitem />
                <Navitem />
            </ul>
        </>
    );
};

export default NavBar;

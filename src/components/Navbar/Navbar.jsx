import CartWidget from '../CartWidget/CartWidget'
import {categories} from '../../mock/mockData'


const NavBar=({categories,title})=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src='src/assets/logo.png' alt="Logo" height="100" className="d-inline-block align-text-top"/>
                    Editorial Mar Negro
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{categories[0]}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{categories[1]}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{categories[2]}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CartWidget/>
        </>
    )
}

export default NavBar;
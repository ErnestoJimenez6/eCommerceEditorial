import CartWidget from'../CartWidget/CartWidget'
import{categories}from'../../mock/mockData'

const NavBar=({categories})=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='/src/assets/logo.png' alt="Logo" height="100"/> Editorial Mar Negro
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav w-100 justify-content-around">
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

export default NavBar
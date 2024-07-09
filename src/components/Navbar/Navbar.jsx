import CartWidget from '../CartWidget/CartWidget'

const Navbar=({categories,title})=>{

    return(
        <>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    <a href='#'>{categories[0]}</a>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <a href='#'>{categories[1]}</a>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <a href='#'>{categories[2]}</a>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    <a href='#'>{categories[3]}</a>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <a href='#'>{categories[4]}</a>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <div>
                <h1>{title}</h1>
            </div>
            <nav className='navItems'>
                <a href='#' className='navItem'>{categories[0]}</a>
                <a href='#' className='navItem'>{categories[1]}</a>
                <a href='#' className='navItem'>{categories[2]}</a>
                <a href='#' className='navItem'>{categories[3]}</a>
                <a href='#' className='navItem'>{categories[4]}</a>
            </nav>
            <CartWidget/>
        </>
    );
}

export default Navbar;
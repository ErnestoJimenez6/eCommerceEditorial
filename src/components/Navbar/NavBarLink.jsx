/* eslint-disable react/prop-types */
export const NavBarLink=({genre})=>{
    return(
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">{genre}</a>
        </li>
    )
}

export default NavBarLink
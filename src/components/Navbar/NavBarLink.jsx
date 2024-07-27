/* eslint-disable react/prop-types */
export const NavBarLink=({category})=>{
    return(
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">{category}</a>
        </li>
    )
}

export default NavBarLink
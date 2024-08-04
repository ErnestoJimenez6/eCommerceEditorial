/* eslint-disable react/prop-types */
import{NavLink}from'react-router-dom'

const NavBarLink=({genre})=>{
    return(
        <li className='nav-item'>
            <NavLink to={`/${genre}`} className='nav-link' aria-current='page'>
                {genre}
            </NavLink>
        </li>
    )
}

export default NavBarLink
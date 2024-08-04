/* eslint-disable react/prop-types */
import{Link,NavLink}from'react-router-dom'

const NavBarLink=({genre})=>{
    return(
        <li className='nav-item'>
            <Link to={`/${genre}`} className='nav-link' aria-current='page'>
                {genre}
            </Link>
        </li>
    )
}

export default NavBarLink
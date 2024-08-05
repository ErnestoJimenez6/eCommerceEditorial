/* eslint-disable react/prop-types */
import{Nav}from'react-bootstrap'
import{NavLink as RouterNavLink}from'react-router-dom'

const NavBarLink=({genre,onClick})=>{
    return(
        <Nav.Item>
            <Nav.Link as={RouterNavLink} to={`/${genre}`} onClick={onClick} className='nav-link'>
                {genre}
            </Nav.Link>
        </Nav.Item>
    )
}

export default NavBarLink
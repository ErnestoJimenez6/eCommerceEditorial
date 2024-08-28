/* eslint-disable react/prop-types */
import{Nav}from'react-bootstrap'
import{NavLink as RouterNavLink}from'react-router-dom'

const NavBarLink=({category,onClick})=>{

    const route=category==='Contact'
    ?'/contact'
    :category==='AboutUs'
    ?'/aboutus'
    :`/category/${category}`

    return(
        <Nav.Item>
            <Nav.Link as={RouterNavLink} to={route} onClick={onClick} className='nav-link'>
                {category}
            </Nav.Link>
        </Nav.Item>
    )
}

export default NavBarLink
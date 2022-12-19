import React from 'react'
import { NavLink } from 'react-router-dom'


function NavItem({navItem}) {
    return (
        <NavLink to={`${navItem?.path}`}>
            <li>{navItem?.title}</li>
        </NavLink>
    )
}

export default NavItem
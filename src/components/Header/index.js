import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from '../NavItem'

import './index.css'

const navLinks = [
  {
    id: 1,
    title: 'Home',
   path:'/'
  },
   {
    id: 2,
     title: 'Language',
   path:'/lan'
  },
    {
    id: 3,
      title: 'Genre',
   path:'/genre'
  },
     {
    id: 4,
       title: 'Account',
   path: '/account'
  }

]

function Header() {
    return (
    <header className='header'>
      <nav className='nav__bar'>
        <ul className='nav__left'>
           <NavLink to='/'>
            <li>Logo</li>
          </NavLink>
        </ul>
        <ul className='nav__right'>
          {navLinks.map(nav => (
            <NavItem key={nav.id} navItem={nav} />
          ))}
          {/* <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/lan'>
            <li>Language</li>
          </NavLink>
          <NavLink to='/genre'>
            <li>Genre</li>
          </NavLink>
          <NavLink to='/account'>
            <li>Account</li>
          </NavLink> */}
        </ul>
      </nav>
      <div className='hr'></div>
      <div className='hr'></div>
    </header>
  )
}

export default Header
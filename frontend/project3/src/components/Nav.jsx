import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex gap-[3rem] text-3xl p-[2rem] items-center justify-center'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
    </div>
  )
}

export default Nav
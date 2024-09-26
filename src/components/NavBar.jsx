import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='mx-auto max-w-screen-2xl flex items-center justify-between py-5 font-medium'>
      <NavLink to='/'>
        <h1 className='text-3xl font-bold'>
          Web Task
        </h1>
      </NavLink>

      <div>
        <ul className='flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/cart' className='flex flex-col items-center gap-1'>
            <p>Cart</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
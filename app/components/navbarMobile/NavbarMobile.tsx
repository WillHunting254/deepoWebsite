import Link from 'next/link'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const NavbarMobile = () => {
  return (
    <div className='flex justify-between items-center bg-primary text-primary-content rounded-xl md:hidden'>
    <div>
      <h1 className='px-4' >Deepo</h1>
    </div>
    <div>
    <button className="btn btn-ghost">
        <ShoppingCartIcon/>
    </button>
    
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu right-0 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow">
        <li><Link href={'/users'} className='text-lg font-semibold'>Home</Link></li>
        <li><Link href={'/users'} className='text-lg font-semibold'>Over ons</Link></li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default NavbarMobile

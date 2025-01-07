import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content rounded-xl hidden md:flex justify-between">
      <div>
        <button className="btn btn-ghost text-xl">Home</button>
        <button className="btn btn-ghost text-xl">Over ons</button>
      </div>
      <button className="btn btn-ghost">
        <ShoppingCartIcon/>
      </button>
    
    </div>
  )
}

export default Navbar

import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Search } from 'lucide-react';
import SearchBar from '../searchBar/SearchBar';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-primary absolute left-0  hidden md:flex">

      </div>
    <div className="navbar bg-primary text-primary-content relative w-full z-10 hidden md:flex justify-between">
      <div>
        <h1 className='px-4' >Deepo</h1>
      </div>
      <div>
        <button className="btn btn-ghost text-base">Home</button>
        <button className="btn btn-ghost text-base">Over ons</button>
      </div>
      <SearchBar/>
      <button className="btn btn-ghost">
        <ShoppingCartIcon/>
      </button>
    
    </div>
    </div>
  )
}

export default Navbar

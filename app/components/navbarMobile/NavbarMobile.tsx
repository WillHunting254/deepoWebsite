import { decrypt } from '@/app/lib/session';
import { cookies } from 'next/headers';
import Link from 'next/link'
import React from 'react'
import LogoutButton from '../logoutButton/LogoutButton';
import SearchBar from '../searchBar/SearchBar';


const NavbarMobile = async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  return (
    <div>
      <div className="navbar bg-primary absolute left-0 min-h-12 hidden md:flex">

      </div>
    <div className='flex justify-between items-center bg-primary z-10 relative text-primary-content w-full'>
      <div>
        <Link href={'/'}><h1 className='px-4 text-xl font-bold'>Deepo</h1></Link>
    </div>
      <SearchBar/>
      {session !== undefined ?
      <LogoutButton/> :
    <Link className="btn btn-sm btn-primary m-2" href={'/login'}>
        Log in
    </Link>}

    </div>
    </div>
  )
}

export default NavbarMobile

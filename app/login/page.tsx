import React from 'react'
import SignupForm from '../components/signUpForm/SignUpForm'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbarMobile/NavbarMobile'

const page = () => {
  return (
    <div className='md:min-w-[610px] xl:min-w-[1224px] 2xl:min-w-[1223px]'>
      <SignupForm/>
    </div>
  )
}

export default page



import React from 'react'
import Navbar from '../components/navbar/Navbar'
import NavbarMobile from '../components/navbarMobile/NavbarMobile'
import CategoryBar from '../components/categoryBar/CategoryBar'
import Link from 'next/link'
import ProductList from '../components/productList/ProductList'
import { logout } from '../actions/auth'
import LogoutButton from '../components/logoutButton/LogoutButton'
import properties from '../properties'

interface Product {
  _id: string,
  imageName: string,
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string,
  title: string,
  isAvailable: boolean,
  quantity: number,
  category: string
}

const DashboardPage = async() => {
  const data = await fetch(properties.devProductsUrl);
  const products : Product[] = await data.json();


  return (
    <div>
      <LogoutButton/>
      <Navbar/>
      <NavbarMobile/>
      <CategoryBar/>
      <Link href={'/users'}>users</Link>
      <ProductList products={products}/> 
    </div>
  )
}

export default DashboardPage

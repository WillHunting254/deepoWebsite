'use client'
import React from 'react'
import ProductCard from '../ProductCard'
import properties from '@/app/properties'
import { categoryStore } from '../store/category'

interface Product {
  _id: string,
  imageName: string[],
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string[],
  title: string,
  isAvailable: boolean,
  quantity: number,
  category: string
}

interface ProductListProps {
  products: Product[];
  isAuthenticated: boolean;
}



const ProductList = ({products, isAuthenticated}: ProductListProps) => {
  const category = categoryStore((state) => state.category)
  const filteredProducts = category === "Alle" 
  ? products : products.filter(product => product.category === category)

  return (
    <div className='md:min-w-[610px] xl:min-w-[1224px] 2xl:min-w-[1223px]'>
      
    
    <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 justify-center items-center'>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} isAuthenticated={isAuthenticated} />
      ))}
      
    </div>
    </div>
  )
}

export default ProductList

import React from 'react'
import ProductCard from '../ProductCard'
import properties from '@/app/properties'

interface Product {
  imageName: string,
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string,
  title: string
}

const ProductList = async () => {

  const data = await fetch(properties.baseUrl + "/api/products")
  const products : Product[] = await data.json();
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center'>
      {products.map((product) => (
        <ProductCard key={product.imageName} price={product.price} description={product.description} articleCode={product.articleCode} imageUrl={product.imageUrl} title={product.title} />
      ))}
      
    </div>
  )
}

export default ProductList

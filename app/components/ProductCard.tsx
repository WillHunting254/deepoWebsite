import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import LensIcon from '@mui/icons-material/Lens';
import Link from 'next/link';
import properties from '../properties';
interface Product {
  _id: string,
  price?: number,
  description: string,
  articleCode: string,
  imageUrl: string[],
  imageName: string[],
  title: string,
  isAvailable: boolean,
  quantity: number,
  category: string
}

interface Props {
  product: Product
  isAuthenticated: boolean
}

const ProductCard = (props:Props) => {
  
  const product: Product = props.product
  return (
    <Link href={{
      pathname: '/product',
      query:{ id: product._id,
      }}}>
    <div className="card card-compact bg-base-100 rounded-sm shadow-xl h-68 w-full md:w-[300px]">
      <figure style={{ marginTop:30, height:140}}>
        <Image src={product.imageUrl[0]} width={140} height={140} alt='product' style={{objectFit:'contain'}}/>
      </figure>
      <div className="py-3 px-3">
        <h2 className="text-base font-semibold truncate">{product.title}</h2>
        <p style={{marginTop: -5}} >  {product.description}</p>
        <div className='flex justify-between items-center mt-2'>

        
          {product.isAvailable ? 
          <div className='flex items-center border-slate-300 rounded-md my-1 px-1 card-bordered w-fit'>
            <LensIcon className='text-green-500 pr-1'/>
            <p className='text-xs font-semibold text-slate-600'>{properties.stock}</p>
          </div>
          :       
          <div className='flex items-center border-slate-300 rounded-md my-1 px-1 card-bordered w-fit'>
            <LensIcon className='text-red-500 pr-1'/>
            <p className='text-xs font-semibold text-slate-400'>{properties.notInStock}</p>
          </div>}
          {props.isAuthenticated && <p className='font-semibold' > €{product.price} </p>}
          
          </div>
      </div>
    </div>
  </Link>
  )
}

export default ProductCard

import React from 'react'
import ProductCard from '../ProductCard'
import Image from 'next/image';

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

interface NewProductListProps {
  product: Product;
  isAuthenticated: boolean;
}



const NewProductList = ({product, isAuthenticated}: NewProductListProps) => {

  return (
    <div className="card card-side bg-slate-100 shadow-xl rounded-none w-full">
    <div className='w-1/2'>
      <Image src={product.imageUrl[0]} alt="New movie is released!" width={1000} height={1000} className='' />
    </div>
  <div className="card-body justify-between w-1/2">
    <h2 className="text-base font-semibold truncate">{product.title}</h2>
    <div className="card-actions">
      <button className="btn btn-sm rounded-sm btn-outline">Bekijk product</button>
    </div>
  </div>
</div>
  )
}

export default NewProductList

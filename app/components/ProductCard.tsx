import React from 'react'
import AddToCard from './AddToCard'
import Image from 'next/image'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface Props {
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string, 
  title: string
}

const ProductCard = (props:Props) => {
  return (
    <div className="card bg-base-100 w-full sm:w-96 shadow-xl">
  <figure style={{height:250, marginTop:30}}>
    <Image src={props.imageUrl[0]} width={250} height={250} alt='product'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-between items-center">
      <p className='text-lg font-bold'>{props.price} €</p>
      <button className="btn btn-primary">
        <AddShoppingCartIcon/>
      </button>
    </div>
  </div>
</div>
  )
}

export default ProductCard

import React, { useEffect } from 'react'
import properties from '../../properties'
import Navbar from '../../components/navbar/Navbar'
import NavbarMobile from '../../components/navbarMobile/NavbarMobile'
import Image from 'next/image'
import LensIcon from '@mui/icons-material/Lens';
import ImageSlider from '../../components/imageSlider/ImageSlider'
import { cookies } from 'next/headers'
import { decrypt } from '../../lib/session'
import { notFound } from 'next/navigation'
import useNotFound from '../../hooks/useNotFound'


interface Props {
  _id: string,
  imageName: string,
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string[],
  title: string,
  isAvailable: boolean,
  quantity: number,
  category: string
}

const page = async ({params}: {params:{
  id: string
}}) => {
  console.log(params.id)
  const data = await fetch(properties.devProductsUrl + '/' + params.id);
  const product: Props = await data.json();
  console.log(product)
  if (!product.title) {
    return useNotFound("Product");
  }

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);
  console.log(product)
  
  return (
    <div className='md:w-[610px] lg:w-[1024px]  xl:w-[1224px] 2xl:w-[1532px]'>
<NavbarMobile />
<div className='w-full p-5'>
    </div>
    <div className='flex flex-col lg:flex-row justify-center lg:justify-between'>
      <div className='w-full lg:w-1/2'>
      {/* <ImageSlider imagesUrl={product.imageUrl}/> */}
      </div>
    <div className='lg:w-1/2 p-5 mt-5'>
      <h1 className='text-xl lg:text-4xl font-medium' >{product.title}</h1>
      { session !== undefined && <p className='text-red-700 text-lg font-semibold pt-3' >€{product.price}</p>}
      {product.isAvailable ? 
      <div className='flex items-center border-slate-300 rounded my-2 px-2 card-bordered w-fit'>
        <LensIcon className='text-green-500 pr-1'/>
        <p className='text-xs font-semibold text-slate-600'>{properties.stock}</p>
      </div>
      :       
      <div className='flex items-center border-slate-300 rounded my-2 px-2 card-bordered w-fit'>
        <LensIcon className='text-red-500 pr-1'/>
        <p className='text-xs font-semibold text-slate-400'>{properties.notInStock}</p>
      </div>}
      <h1 className='text-base pt-3'>{product.description}</h1>
    </div>

    </div>
    </div>
  )
}

export default page

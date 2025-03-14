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
  const data = await fetch(properties.productsUrl + '/' + params.id);
  const product: Props = await data.json();
  console.log(product)
  if (!product.title) {
    return useNotFound("Product");
  }

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);
  console.log(product)
  
  return (
    <div className='min-h-screen bg-gray-50'>
      <NavbarMobile />
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Breadcrumb Navigation */}
        <nav className='mb-8'>
          <ol className='flex items-center space-x-2 text-sm'>
            <li><a href='/' className='text-gray-500 hover:text-gray-900'>Producten</a></li>
            <li className='text-gray-500'>/</li>
            <li className='text-gray-900 font-medium'>{product.title}</li>
          </ol>
        </nav>

        <div className='flex flex-col lg:flex-row lg:space-x-8'>
          {/* Product Image Section */}
          <div className='w-full lg:w-1/2'>
            <ImageSlider imagesUrl={product.imageUrl}/>
          </div>

          {/* Product Details Section */}
          <div className='lg:w-1/2 space-y-6'>
            {/* Product Title and SKU */}
            <div>
              <h1 className='text-2xl lg:text-4xl font-bold text-gray-900'>{product.title}</h1>
              <p className='text-sm text-gray-500 mt-2'>SKU: {product.articleCode}</p>
            </div>
            
            {/* Price Section */}
            {session !== undefined && (
              <div className='inline-block bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100'>
                <span className='text-4xl font-bold text-gray-900'>€{product.price}</span>
              </div>
            )}

            {/* Availability Status */}
            {product.isAvailable ? (
              <div className='flex w-fit items-center px-3 py-1 border border-green-200 rounded-full bg-green-50'>
                <LensIcon className='w-2 h-2 text-green-500 mr-2'/>
                <p className='text-sm font-medium text-green-700'>{properties.stock}</p>

              </div>
            ) : (
              <div className='flex w-fit items-center px-3 py-1 border border-red-200 rounded-full bg-red-50'>
                <LensIcon className='w-2 h-2 text-red-500 mr-2'/>
                <p className='text-sm font-medium text-red-700'>{properties.notInStock}</p>
              </div>
            )}

            {/* Product Description */}
            <div className='mt-4 space-y-6'>
              <h2 className='text-lg font-medium text-gray-900'>Beschrijving</h2>
              <p className='text-base text-gray-700 leading-relaxed'>{product.description}</p>
            </div>

            {/* Product Details */}
            <div className='mt-4 border-t border-gray-200 pt-4'>
              <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <dt className='text-sm font-medium text-gray-500'>Article Code</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{product.articleCode}</dd>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <dt className='text-sm font-medium text-gray-500'>Category</dt>
                  <dd className='mt-1 text-sm text-gray-900'>{product.category}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page

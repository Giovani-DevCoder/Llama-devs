import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  return (
    <div>
        <div className='bg-white py-2 px-4 flex justify-between items-center'>
            <h2 className='font-bold text-lg'>All products</h2>
            <button className='rounded-full py-4 px-4 bg-yellow-400 hover:bg-yellow-300' 
            onClick={() =>setOpenUploadProduct(true)} >Upload product</button>
        </div>

        {/** upload product */}
        {
          openUploadProduct && (
            <UploadProduct onClose={() =>setOpenUploadProduct(false)} />
          )
        }
    </div>
  )
}

export default AllProducts
import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import productCategory from '../helpers/productCategory';

const UploadProduct = ({
    onClose
}) => {
  const [data,setData] = useState({
      productName : "",
      brandName : "",
      category : "",
      productImage : "",
      descripcion : "",
      price : "",
      selling : ""
  })

  const handleOnChange = (e)=>{

  }
  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-45 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%]'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-lg'>Upload Product</h2>
                <div className='w-fit ml-auto text-2xl cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 p-1' onClick={onClose}>
                    <CgClose/>
                </div>
            </div>

            <form className='grid p-4 gap-2 overflow-y-auto'>
                <label htmlFor='productName'>Product name:</label>
                <input type='text' id='productName' placeholder='enter product name' name='productName' value={data.productName} onChange={handleOnChange} className='p-2 bg-slate-200'/>

                <label htmlFor='brandName'>Brand name:</label>
                <input type='text' id='brandName' placeholder='enter brand name' name='brandName' value={data.brandName} onChange={handleOnChange} className='p-2 bg-slate-200'/>

                <label htmlFor='category' className='mt-3'>Category:</label>
                <select value={data.category} className='p-2 bg-slate-100 border-rounded'>
                    {
                      productCategory.map((el,index)=>{
                        return(
                          <option value={el.value} key={el.value+index}>{el.label}</option>
                        )
                      })
                    }
                </select>

                <label htmlFor='productImage'>Product image:</label>
                <div className='p-2 bg-slate-100 border rounded h-48 w-full'></div>
            </form>
        </div>
    </div>
  )
}

export default UploadProduct
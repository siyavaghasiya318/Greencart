import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContex'
import { RxCross2 } from "react-icons/rx";

const Formgetdata = () => {

  const {get,getform} = useContext(UserContext)

  return (
    <div className='pt-20'>
      <div className='text-2xl text-center mb-10 font-semibold'>DATA</div>
      {get.map ((iteam,i) => {
        return(
          <div className='border border-gray-300 rounded-sm text-[14px] lg:text-[16px] lg:w-[500px] w-[400px]  px-10 py-2 mx-10  mt-5'>
              <div className='text-sm mb-2'>{i + 1}.</div>
              <div className='border border-gray-300 px-3 py-1   w-[300px]'>{iteam.email}</div>
              <div className='flex justify-between'>
                <div className='border border-gray-300 px-3 py-1 w-fit mt-1  '  >{iteam.password}</div>
                <div className=' border border-red-500 rounded-2xl mt-3 px-1 pt-1'  onClick={() => getform(i)}><RxCross2 /></div>
                
              </div>
              
          </div>
        )
      } )}
    </div>
  )
}

export default Formgetdata
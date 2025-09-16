import React, { useContext } from 'react'
import { list } from '../assets/List'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContex'
import { BsCart2 } from "react-icons/bs";
import toast from 'react-hot-toast';

const Shop = () => {

  

  const {addcart} = useContext(UserContext)
  // const {data,setData} = useContext(UserContext)

  // const Add = () => {
  //     setData(data+1)
  //     toast.success("Cart Added")
  //   }

    return(
        <>
            <div className="grid grid-cols-4 gap-5 px-30 pt-25">
                    {list.map((iteam) => {
                      return (
                          <div className=" rounded shadow mb-5">
                        <Link to={`/getdata/${iteam.id}/${iteam.categories}`}><div><img src={iteam.img[0]}  className=" w-full h-[200px] object-cover " /></div></Link>
                         <div className='px-5  py-2'>
                            <p className="text-sm  text-gray-600 capitalize">{iteam.categories}</p>
                            <h3 className="capitalize text-lg font-semibold">{iteam.name}</h3>
                            <div className=' flex justify-between mt-1'>
                              <div className="text-[#4FBF8B] font-bold me-25 text-lg">${iteam.price}</div> 
                                <div onClick={() => addcart(iteam)}  className='flex text-[#4FBF8B] text-lg  bg-[#EDF8F3] px-3 rounded border py-1'><BsCart2 /><div className='text-sm font-semibold '>Add</div></div>
                              
                            </div>
                            
                         </div>
                      </div>
                      )
                    } 
                      
                    )}
                  </div>

                  
        </>
    )

  
}

export default Shop
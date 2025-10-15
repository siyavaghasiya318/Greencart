import React, { useContext } from 'react'
import { UserContext } from './Context/UserContex'
import { Link } from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Cart = () => {

    
    const {cart,cartdelete, RemoveCart, total} = useContext(UserContext);

    

  return (
    <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2'>
        <div className='pt-20'>
            {cart.length === 0 ? (
                <div className='flex justify-center'>
                    <div className='text-center text-2xl font-bold text-gray-500 border w-fit px-10 py-3 border-gray-300 rounded-lg mt-10'>No iteam in cart </div>
                </div>
            ) 

            :

            (
                cart.map((item,i) => {
                    return(
                        <div>
                            <div className='border   px-5 mx-5 mb-10 grid grid-cols-2  py-2'>
                                <div className='flex'> 
                                    <div>
                                    <div className='text-gray-500 font-semibold text-[14px] md:text-[16px]'>Product detail</div>
                                    <div className='w-[80px] h-[80px] border border-gray-400 mt-3 md:mt-5'><img className='w-full h-full' src={item.img[0]} alt="" /></div>
                                    </div>
                                    <div className=' ms-2 text-sm  text-gray-600 mt-15 text-[13px] md:text-[14px]'>
                                        <div>{item.categories}</div>
                                        <div>{item.name}</div>
                                        <div>{item.price}$</div>
                                        <div>{item.quentity}</div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 ps-5'>
                                    <div >
                                        <div className='  text-gray-500 font-semibold text-[14px] md:text-[16px]'>Subtotal</div>
                                        <div className='  text-gray-500 font-semibold mt-15 text-[15px] md:text-[17px]' >{item.price *item.quentity} $</div>
                                    </div>

                                    <div>
                                        <div  className='  text-gray-500 font-semibold text-[14px] md:text-[16px]   '>Action</div>
                                        <div className='text-red-400 mt-15 text-xl'>
                                            {item.quentity === 1 ?(
                                            <div onClick={() => RemoveCart(i)}><ImCancelCircle /></div>
                                        ):(
                                            <div onClick={() => cartdelete(item.id)}><ImCancelCircle /></div>
                                        )}
                                        </div>
                                    </div>
                                </div>
                                
                                
                                 
                            </div>
                           
                        </div>
                        
                    )
                })
            ) 
            }
        </div>

         
        
            
                <div className='pt-30 mx-18'>
            <div className='border border-gray-400 bg-gray-50 text-gray-600 '>
                <div className='p-5'>
                    <div className='lg:text-xl text-md sm:text-lg md:text-xl text-gray-700 font-semibold'>Order Summary</div>
                    <hr  className='my-5 text-gray-300'/>
                    <div className='text-sm md:text-[16px] lg:text-[16px]'>
                        <div className='flex justify-between '>
                            <div>Price </div><div>{total}</div>
                        </div>
                        <div className='flex justify-between my-1'>
                            <div>Shipping Fee</div>   <div>Free</div>
                        </div>
                        <div className='flex justify-between'>
                            <div>Tax (2%)</div>    <div> {total*2 /100} </div>
                        </div> <hr className='text-gray-300 mt-5' />
                        <div className='flex justify-between my-2'>
                            <div>Total Price</div>       <div>{(total*2/100)+total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        
    
        {/* <Link to="/shop" className='text-green-400 '><div className='flex '> <div className='mt-1 me-2 ps-10'>< FaLongArrowAltLeft /></div> Continue shopping</div></Link> */}
    </div>
  )
}

export default Cart
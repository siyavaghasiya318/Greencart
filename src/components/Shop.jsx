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
            <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2 gap-5 px-5 lg:px-30 pt-25 ">
                    {list.map((iteam) => {
                      return (
                          <div className=" rounded shadow mb-5 overflow-hidden">
                        <Link to={`/getdata/${iteam.id}/${iteam.categories}`}><div ><img src={iteam.img[0]}  className=" w-full h-[200px] object-cover " /></div></Link>
                         <div className='px-4  py-2 text-gray-700'>
                            <p className="text-[12px]  text-gray-600 capitalize">{iteam.categories}</p>
                            <h3 className="capitalize lg:text-lg  font-semibold">{iteam.name}</h3>
                            <div className=' flex justify-between mt-1'>
                              <div className="text-[#4FBF8B] font-bold  text-mdx lg:text-lg">${iteam.price}</div> 
                                <div onClick={() => addcart(iteam)}  className='flex text-[#4FBF8B] lg:text-lg text-sm  bg-[#EDF8F3] px-3 rounded border py-1'><BsCart2 /><div className='lg:text-sm text-[12px] ms-2 font-semibold '>Add</div></div>
                              
                            </div>
                            
                         </div>
                      </div>
                      )
                    } 
                      
                    )}
                  </div>


                  <div className='bg-[#EDF8F3] pt-10 px-5 mt-20 '>
        
          <div className='md:grid grid-cols-2 lg:px-18 md:px-18'>
            <div>
              <div><img src="https://greencart-frontend-rho.vercel.app/assets/logo-CMLzTNjw.svg" alt="" /></div>
              <div className='text-gray-600 text-md my-5 lg:pe-20 md:pe-0 '>We deliver fresh groceries an snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</div>
            </div>

        <div className='flex justify-between mt-10 md:mt-0 '>

          <ul className='text-sm text-gray-600 '>

            <li className='text-gray-900 text-[15px] mb-5 font-bold'>Quick Links</li>
            <li>Home</li>
            <li>Best Sellers</li>
            <li>Offers & Deals</li>
            <li>Contact Us</li>
            <li>FAQs</li>

          </ul>

          <ul className='text-sm text-gray-600'>

            <li className='text-gray-900 text-[15px] mb-5 font-bold'> Need help?</li>
            <li>Delivery Information</li>
            <li>Return & Refund Policy</li>
            <li>Payment Methods</li>
            <li>Track your Order</li>
            <li>Contact Us</li>

          </ul>

          <ul className='text-sm text-gray-600'>

            <li className='text-gray-900 text-[15px] mb-5 font-bold'>Follow Us</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>YouTube</li>

          </ul>



        </div>
          </div>
        <div className='lg:px-18'><hr className='text-gray-300 mt-10 lg:px-18' /></div>
        <div className='text-gray-500 text-center text-md py-5'>Copyright 2025 © GreenCart.com All Right Reserved.</div>
      </div>

                  
        </>
    )

  
}

export default Shop
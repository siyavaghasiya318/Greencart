import React, { useContext, useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { footer, list, vegetable } from '../assets/List';
// import toast from 'react-hot-toast'

import { UserContext, UserProvider } from '../Context/UserContex';

const Home = () => {
    const [get,setGet] = useState("vegetables")

    const data1 = list.filter((item) => item.categories === get)



  const{addcart} = useContext(UserContext)

  // const Add = () => {
  //   setData(data+1)
  //   toast.success("Cart Added")
  // }`
 
    
    

  return (
    <>

      <div className=' pt-30 px-6  lg:px-30 md:px-10 sm:px-5 xs:px-10 '>
        <div className='bg-cover   bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg_sm-pyq1xQGZ.png)] md:bg-center md:bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg-BUDbdxCy.png)]  lg:bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg-BUDbdxCy.png)]   sm:bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg_sm-pyq1xQGZ.png)]'>
          <div className='lg:py-20 flex justify-center px-16 py-20 text-center pt-130 md:pt-10 md:px-16 md:grid grid-cols-2 lg:px-20   sm:px-40 md:text-left sm:text-center sm:justify-center sm:flex  sm:pt-200 sm:py-15 '>
            <div>
              <div className='text-[30px] lg:text-5xl md:text-4xl font-bold text-[#364153] sm:text-[30px]'>Freshes You Can Trust, Saving You will Love!</div>
              <Link to = {`/shop`}><button  className= ' px-8 py-3 hover:text-[#4FBF8B] hover:bg-transparent text-white font-semibold   bg-[#4FBF8B]  mt-9 rounded'>Shop Now</button><span className='ms-5 font-semibold text-[0px] md:text-[16px] '>Explore deals </span></Link>
            </div>
          </div>
        </div>
        
      </div>

      <div className='lg:px-30 px-5 md:px-10  sm:px-10'>
        <div className='text-2xl  mt-20 font-semibold pb-10'>Categories</div>

        <div className='grid grid-cols-2   sm:grid-cols-3 gap-5 md:gap-8 lg:grid-cols-7 md:grid-cols-5 '>


          <button onClick={() => setGet("vegetables")}>
            <div  className='w-full px-10  lg:w-[130px] md:w-[140px] md:px-5  sm:w-[180px] rounded-xl pb-10 py-5 sm:px-8  lg:px-3 bg-[#FEF6DA]'><img src="https://greencart-frontend-rho.vercel.app/assets/organic_vegitable_image-B6WcGgPL.png" className='transition-transform duration-300 hover:scale-110' alt="" />
              <div className='mt-2 font-semibold text-sm text-center'>organic vaggies</div>
            </div>
          </button>

          <button onClick={() => setGet("fruits")}>
            <div className='w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 py-5 pb-10  lg:px-3 bg-[#FEE0E0]'><img src="https://greencart-frontend-rho.vercel.app/assets/fresh_fruits_image-GVwDikkj.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Fresh Fruits</div>
          </div>
          </button>
          
          <button onClick={() => setGet("colddrink")}>
            <div className=' w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 py-5 pb-10  lg:px-3 bg-[#F0F5DE]'><img src="https://greencart-frontend-rho.vercel.app/assets/bottles_image-DMalNkiM.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Cold Drinks</div>
          </div>
          </button>

          <button onClick={() => setGet("instant food")}>
            <div className='w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 py-5 pb-10  lg:px-3 bg-[#E1F5EC]'><img src="https://greencart-frontend-rho.vercel.app/assets/maggi_image-DD7JXh5a.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className=' mt-2 font-semibold text-sm text-center'>Instants Food</div>
          </div>
          </button>

          <button onClick={() => setGet("dairy products")}>
            <div className='w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 py-5 pb-10  lg:px-3 bg-[#FEE6CD]'><img src="https://greencart-frontend-rho.vercel.app/assets/dairy_product_image-B1gRG1MT.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className=' mt-2 font-semibold text-sm text-center'>Dairy Product</div>
          </div>
          </button>

          <button onClick={() => setGet("bakery and breads")}>
            <div className='w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 pb-10 py-5  lg:px-3 bg-[#E0F6FE]'><img src="https://greencart-frontend-rho.vercel.app/assets/bakery_image-e5rU_kNe.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Backery & Bread</div>
          </div>
          </button>

          <button onClick={() => setGet("grains & Cereals")}>
            <div className='w-full px-10 lg:w-[130px] sm:w-[180px] md:w-[140px] md:px-5 rounded-xl sm:px-8 pb-10 py-5  lg:px-3 bg-[#F1E3F9]'><img src="https://greencart-frontend-rho.vercel.app/assets/grain_image-BkT7wje5.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Grains & Cereals</div>
          </div>
          </button>

        </div>

      </div>



      <div className="grid grid-cols-2 gap-5 px-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 lg:gap-5 md:gap-8 sm:gap-10 lg:px-30 md:px-10 sm:px-10 xs:px-20 mt-5">
        {data1.map((item) => (
          <div key={item.id} className=" rounded shadow mb-5">
            <Link to={`/getdata/${item.id}/${item.categories} `} className='flex justify-center'><div className='rounded-xl w-[150px] h-[150px] transition-transform duration-300 hover:scale-110 sm:w-[200px] '><img src={item.img[0]}  className="  w-full h-full  object-cover " /> </div></Link>
             <div className='px-5  py-2'>
                <p className="text-sm  text-gray-600 capitalize mt-2">{item.categories}</p>
                <h3 className="capitalize text-md font-semibold mt-1">{item.name}</h3>
                <div className=' flex justify-between mt-1 '>
                  <div className="text-[#4FBF8B] font-bold text-md ">${item.price}</div> 
                  <button onClick={() => addcart(item)}  className='flex text-[#4FBF8B] text-md  bg-[#EDF8F3] px-3 rounded border py-1'><BsCart2 /><div className='text-[13px] font-semibold ms-2'>Add</div></button>
                </div>
                
             </div>
          </div>
        ))}
      </div>

      <div className='lg:px-30 md:px-10 px-5  mt-30 overflow-hidden '>
        <div className=' bg-cover  h-[900px] sm:h-[1100px] bg-center bg-[url(https://greencart-frontend-rho.vercel.app/assets/bottom_banner_image_sm-BH0VEQKF.png)] md:h-[300px] md:bg-[url(https://greencart-frontend-rho.vercel.app/assets/bottom_banner_image-DdX_9fDq.png)] lg:h-[380px]  lg:bg-[url(https://greencart-frontend-rho.vercel.app/assets/bottom_banner_image-DdX_9fDq.png)]'> 

          <div className=' pt-20 md:pt-10 pb-200 md:pb-0'><div></div>
          <div className='lg:text-3xl md:text-2xl sm:text-xl text-[25px]  font-bold text-center text-[#4FBF8B] md:text-end md:pe-20 lg:text-end lg:pe-25'>Why We Are the Best ?</div>
            <div className=' lg:pe-10  lg:py-1 md:py-1 justify-center  md:flex md:justify-end '>
              
              <div className=' px-15  text-[#364153]'>
                {vegetable.map((iteam) => (
                    <div className='flex gap-4'>
                      <div className='sm:w-[30px] lg:w-[50px] md:w-[35px] w-[35px] mt-3'><img src={iteam.image} alt="" /></div>
                      <div>
                        <div className='lg:text-xl md:text-lg  text-[18px] font-bold mt-2'>{iteam.delivery}</div>
                        <div className='text-gray-400 lg:text-sm md:text-[12px]  text-[12px] font-semibold'>{iteam.time}</div>
                      </div>
                    </div>
                ))}
              </div>
                
            </div>
          </div>

        </div>
      </div>


      <div className='mt-30 text-center '>
        <div className='lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#364153] mb-2'>Never Miss a Deal!</div>
        <div className='text-gray-500 lg:text-[16px] md:text-[14px] sm:text-[12px]'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</div>
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

export default Home
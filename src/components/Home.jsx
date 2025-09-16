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
  // }
 
    
    

  return (
    <>

      <div className=' pt-30 px-30 '>
        <div className=' bg-cover bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg-BUDbdxCy.png)]'>
          <div className='py-20 grid grid-cols-2 px-20'>
            <div>
              <div className='text-5xl font-bold text-[#364153]'>Freshes You Can Trust, Saving You will Love!</div>
              <Link to = {`/shop`}><button  className= ' hover:text-[#4FBF8B] hover:bg-transparent text-white font-bold  bg-[#4FBF8B] px-8 py-3 mt-9 rounded'>Shop Now</button><span className='ms-5 font-semibold '>Explore deals </span></Link>
            </div>
          </div>
        </div>
        
      </div>

      <div className='px-30'>
        <div className='text-2xl  mt-20 font-semibold pb-10'>Categories</div>

        <div className='grid grid-cols-7 '>


          <button onClick={() => setGet("vegetables")}>
            <div  className=' w-[130px] rounded-xl pb-10 py-5 px-3 bg-[#FEF6DA]'><img src="https://greencart-frontend-rho.vercel.app/assets/organic_vegitable_image-B6WcGgPL.png" className='transition-transform duration-300 hover:scale-110' alt="" />
              <div className='mt-2 font-semibold text-sm text-center'>organic vaggies</div>
            </div>
          </button>

          <button onClick={() => setGet("fruits")}>
            <div className='w-[130px] rounded-xl py-5 pb-10 px-3 bg-[#FEE0E0]'><img src="https://greencart-frontend-rho.vercel.app/assets/fresh_fruits_image-GVwDikkj.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Fresh Fruits</div>
          </div>
          </button>
          
          <button onClick={() => setGet("colddrink")}>
            <div className='w-[130px] rounded-xl py-5 pb-10 px-3 bg-[#F0F5DE]'><img src="https://greencart-frontend-rho.vercel.app/assets/bottles_image-DMalNkiM.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Cold Drinks</div>
          </div>
          </button>

          <button onClick={() => setGet("instant food")}>
            <div className='w-[130px] rounded-xl py-5 pb-10 px-3 bg-[#E1F5EC]'><img src="https://greencart-frontend-rho.vercel.app/assets/maggi_image-DD7JXh5a.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className=' mt-2 font-semibold text-sm text-center'>Instants Food</div>
          </div>
          </button>

          <button onClick={() => setGet("dairy products")}>
            <div className='w-[130px] rounded-xl py-5 pb-10 px-3 bg-[#FEE6CD]'><img src="https://greencart-frontend-rho.vercel.app/assets/dairy_product_image-B1gRG1MT.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className=' mt-2 font-semibold text-sm text-center'>Dairy Product</div>
          </div>
          </button>

          <button onClick={() => setGet("bakery and breads")}>
            <div className='w-[130px] rounded-xl pb-10 py-5 px-3 bg-[#E0F6FE]'><img src="https://greencart-frontend-rho.vercel.app/assets/bakery_image-e5rU_kNe.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Backery & Bread</div>
          </div>
          </button>

          <button onClick={() => setGet("grains & Cereals")}>
            <div className='w-[130px] rounded-xl pb-10 py-5 px-3 bg-[#F1E3F9]'><img src="https://greencart-frontend-rho.vercel.app/assets/grain_image-BkT7wje5.png" className='transition-transform duration-300 hover:scale-110' alt="" />
            <div className='mt-2 font-semibold text-sm text-center'>Grains & Cereals</div>
          </div>
          </button>

        </div>

      </div>



      <div className="grid grid-cols-4 gap-5 px-30 mt-5">
        {data1.map((item) => (
          <div key={item.id} className=" rounded shadow mb-5">
            <Link to={`/getdata/${item.id}/${item.categories}`}><div className='rounded-xl  transition-transform duration-300 hover:scale-110 '><img src={item.img[0]}  className=" w-full h-[200px] object-cover " /> </div></Link>
             <div className='px-5  py-2'>
                <p className="text-sm  text-gray-600 capitalize mt-2">{item.categories}</p>
                <h3 className="capitalize text-lg font-semibold mt-1">{item.name}</h3>
                <div className=' flex justify-between mt-1 '>
                  <div className="text-[#4FBF8B] font-bold text-lg me-25">${item.price}</div> 
                  <button onClick={() => addcart(item)}  className='flex text-[#4FBF8B] text-lg  bg-[#EDF8F3] px-3 rounded border py-1'><BsCart2 /><div className='text-sm font-semibold ms-2'>Add</div></button>
                </div>
                
             </div>
          </div>
        ))}
      </div>

      <div className='px-30 mt-30'>
        <div className=' bg-cover bg-[url(https://greencart-frontend-rho.vercel.app/assets/bottom_banner_image-DdX_9fDq.png)]'> 

          <div className=' grid grid-cols-2'><div></div>
            <div className='  pt-10 px-20 py-15'>
              <div className='text-3xl font-bold text-[#4FBF8B] mb-4'>Why We Are the Best ?</div>

              <div>
                {vegetable.map((iteam) => (
                    <div className='flex gap-3'>
                      <div className='w-[50px] '><img src={iteam.image} alt="" /></div>
                      <div>
                        <div className='text-xl font-semibold'>{iteam.delivery}</div>
                        <div className='text-gray-400 text-sm'>{iteam.time}</div>
                      </div>
                    </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>


      <div className='mt-30 text-center'>
        <div className='text-3xl font-bold text-[#364153] mb-2'>Never Miss a Deal!</div>
        <div className='text-gray-500'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</div>
      </div>

      <div className='bg-[#EDF8F3] px-30 py-12 mt-30'>
        <div className='grid grid-cols-2 '>

          <div className=' text-gray-500 col-span-1 pe-20'>
            <div><img src="https://greencart-frontend-rho.vercel.app/assets/logo-CMLzTNjw.svg" alt="" /></div>
            <div className='mt-5'>We deliver fresh groceries an snacks straight to your door. Trusted by thousands, we aim to make your shopping experience simple and affordable.</div>
          </div>

          <div className='grid grid-cols-4 gap-5'>
            <div></div>
            {footer.map((iteam) => (
            <div className='text-sm text-gray-500'>
              <div className='font-bold text-black'>{iteam.topic} </div>
              <div>{iteam.first}</div>
              <div>{iteam.sec}</div>
              <div>{iteam.third}</div>
              <div>{iteam.four}</div>
              <div>{iteam.five}</div>  
            </div>
          ))}
          </div>

        </div>
      </div>

    </>
  )
}

export default Home
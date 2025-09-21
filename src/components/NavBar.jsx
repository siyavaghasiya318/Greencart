import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { UserContext } from '../Context/UserContex';



const NavBar = () => {

    const {cart,open,setOpen} = useContext(UserContext)
    

  
  return (
    <>
        <nav className='flex px-5 md:px-20 lg:px-20 justify-between py-2 align-middle shadow bg-white fixed  w-full'>
          <h1 className='w-[100px] lg:w-[160px] md:w-[140px]'><img src="https://greencart-frontend-rho.vercel.app/assets/logo-CMLzTNjw.svg" alt="" /></h1>
            <ul className='flex lg:gap-15 md:gap-10 sm:gap-8 lg:text-[18px] md:text-[16px] sm:text-[15px] text-[12px] gap-5 '>
                <li className='hover:text-green-400 pt-1'><NavLink to='/'>Home</NavLink>  </li>
                <li className='hover:text-green-400 pt-1'><NavLink to='/shop'>Shop</NavLink></li>
                <NavLink to ="/cart"><button className=' mt-2  lg:mt-3 flex relative lg:text-xl text-sm md:text-[17px]'><FiShoppingCart /><div className='lg:ms-1 '><span className='absolute bg-[#4FBF8B] text-white rounded-2xl text-[8px] px-1 lg:px-1 lg:text-[13px]'>{cart.length}</span></div></button>  </NavLink>
                <li className='hover:text-green-400 pt-1'> <NavLink to="/formdata">Form data</NavLink></li>
                <li className='bg-[#4FBF8B] text-[12px] px-3 py-1 lg:px-8 lg:py-2 rounded-4xl lg:text-[15px] text-white font-semibold' onClick={()=> setOpen(!open)}><NavLink>Login</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
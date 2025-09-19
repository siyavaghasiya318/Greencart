import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { UserContext } from '../Context/UserContex';



const NavBar = () => {

    const {cart,open,setOpen} = useContext(UserContext)
    

  
  return (
    <>
        <nav className='flex md:px-15px  lg:px-20 justify-between py-2 align-middle shadow bg-white fixed  w-full'>
          <h1><img src="https://greencart-frontend-rho.vercel.app/assets/logo-CMLzTNjw.svg" alt="" /></h1>
            <ul className='flex lg:gap-15 md:gap-10 sm:gap-5 text-lg pe-30 '>
                <li className='hover:text-green-400 pt-1'><NavLink to='/'>Home</NavLink>  </li>
                <li className='hover:text-green-400 pt-1'><NavLink to='/shop'>Shop</NavLink></li>
                <NavLink to ="/cart"><button className='  mt-3 flex relative text-2xl'><FiShoppingCart /><div className='ms-1  '><span className='absolute bg-[#4FBF8B] text-white rounded-2xl px-1 text-[13px]'>{cart.length}</span></div></button>  </NavLink>
                <li className='bg-[#4FBF8B] px-8 py-2 rounded-4xl text-[15px] text-white font-semibold' onClick={()=> setOpen(!open)}><NavLink>Login</NavLink></li>
                <li className='hover:text-green-400 pt-1'> <NavLink to="/formdata">Form data</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
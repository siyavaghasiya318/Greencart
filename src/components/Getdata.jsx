import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { list } from '../assets/List';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { UserContext } from '../Context/UserContex';
// import toast from 'react-hot-toast';

const Getdata = () => {

  const [first, setfirst] = useState(0)

  const {id,categories} = useParams();
  
  const iteam = list.find((data) => data.id === parseInt(id))
  console.log(iteam);
  
  const category = list.filter((cdata) => cdata.categories === categories);
    

  // const{data,setData} = useContext(UserContext)

  
  // const AddCart = () =>{
  //   setData(data+1)
  //   toast.success("card Added")
  // }
      
    const{addcart} = useContext(UserContext)
   
  return(
    <>
      <div className='grid grid-cols-2 pt-35 mx-40'>

        <div className='flex gap-4'>
          <div className="">
            {iteam.img.map((item, i)=>{
              return(
                <div className="border   w-[85px] h-[80px]  mb-5 border-gray-300 rounded" onClick={()=> setfirst(i)}><img className='w-full h-full' src={item} alt="" /></div>
              )
            })}
          </div>
         <div className='h-[420px] w-[400px]'><img className='border border-gray-300 rounded-lg w-[100%] h-[100%] ' src={iteam.img[0]} alt="" /></div> 
        </div>

        <div className='ps-20 text-[#364153] mt-15 '>
          <div className=' flex text-3xl font-semibold '>{iteam.name}  <div className='text-sm text-gray-400 mt-3 ms-3'>( {iteam.categories} )</div></div>
          <div className='flex  gap-0.5 mt-4 text-[#4FBF8B]'><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><span>(04)</span></div>
          <div className='font-semibold text-xl mt-4'>MRP ${iteam.price}</div>
          <div className='font-semibold  mt-4'>About Product</div>
          <div className='text-gray-400 text-sm'>dbsfbsb</div>
          <div className='flex gap-4 mt-10'>
            <button onClick={() => addcart(iteam)} className=' font-semibold  bg-gray-200  px-12 py-3'>Add to cart</button>
            <Link to="/cart" onClick={() => addcart(iteam)}  ><button className=' font-semibold text-white bg-[#4FBF8B] px-15 py-3 ' >Buy now</button></Link>
          </div>
        </div>

      </div>

      
      
    </>
  )
}

export default Getdata
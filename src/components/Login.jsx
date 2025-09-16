import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContex'

const Login = () => {

     const {open, setOpen,form,setForm,formChange,formSubmit} = useContext(UserContext);

  return (
    <div>
        {open === true ?(
            <form onSubmit={formSubmit}  className='fixed bg-black/50 h-full w-full flex items-center justify-center text-[#3f4652] font-semibold  '  >
                <div className='bg-white z-50 relative px-10 py-10'>
                    <div className="text-black cursor-pointer absolute  right-3 top-2 font-bold text-1xl" onClick={()=> setOpen(false)}>X</div>
                    <div className='text-center text-2xl font-bold text-[#4FBF8B] mb-5'>User Login</div>
                    <div className='text-sm '>Email:</div>
                    <   input required onChange={formChange} name='email' value={form.email} type="text" className='w-70 border px-2 focus:border-2 focus:border-[#4FBF8B] focus:outline-none border-gray-400 rounded-sm  py-2 mt-1 text-sm' placeholder='type here'  />
                    <div className='text-sm mt-5'>Password:</div>
                    <  input required onChange={formChange} name='password' value={form.password} type="text" className=' w-70 border px-2 focus:border-2 focus:border-[#4FBF8B] focus:outline-none  border-gray-400 rounded-sm py-2 mt-1 text-sm' placeholder='type here' />
                    <div className='text-sm mt-4'>Create an account? <span className='text-[#4FBF8B]'>click here</span></div>
                    <button type='submit' className='bg-[#4FBF8B] py-2  text-white w-full mt-5'>Login</button>
                </div>
            </form>
        ):""}
    </div>
  )
}

export default Login
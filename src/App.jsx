import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom' 
import NavBar from './components/NavBar'
import Home from './components/Home'
import Shop from './components/Shop'
import Getdata from './components/Getdata'
import Login from './components/Login'
import { UserProvider } from './Context/UserContex'
import { Toaster } from 'react-hot-toast'
import Cart from './Cart'
import Formgetdata from './components/Formgetdata'

const App = () => {

// const [count,setCount] = useState(0)
     

  return (
    <div className='relative'>
      <UserProvider>
        <BrowserRouter>
        <NavBar  />
        <Login/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/shop" element={<Shop/>} />
          <Route path='/getdata/:id/:categories' element={<Getdata/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/formdata' element={<Formgetdata/>} />
        </Routes>

      </BrowserRouter>
      </UserProvider>
      <Toaster 
          position="top-center"
          reverseOrder={false}
      />
    </div>
  )
}

export default App
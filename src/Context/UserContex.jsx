import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [data,setData] = useState(0)
    const [open, setOpen] = useState(false)

    const [get,setGet] = useState([])

    const[form,setForm] = useState({
        email : "",
        password : ""
    })

    const formChange = (e) => {
        const {name,value} = e.target

        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
         console.log(form);
         
    }

    const formSubmit = (e) => {
        e.preventDefault()

        setGet([...get,form])
        setForm({
            email : "",
            password : ""
        })

        toast.success("form successfully!")
        
        setTimeout(()=>{
            setOpen(false)
        },500)

    }



    

    const [cart,setCart] =useState([])

    const addcart = (iteams) => {
        setCart((prevCart)=>{
            const existingCart = prevCart.find((p)=>
                 p.id === iteams.id)

            if(existingCart){
                return prevCart.map((p)=>
                    p.id === iteams.id ? {...p, quentity: p.quentity + 1 } : p, 

                    toast.success("More Cart Added")
                )
            }else{
                return [...prevCart, {...iteams, quentity: 1}];
                
                toast.success("Cart Added")
            }
        })
    }

    




const cartdelete = (id) => {
    setCart((prevCart)=> 
    prevCart.map((p)=> p.id === id ? {...p, quentity: p.quentity - 1} : p),
    toast.success("Cart Removed")
    )
}


const RemoveCart = (e)=>{
    const copycart = [...cart]
    copycart.splice(e,1)
    setCart(copycart)
    toast.success("Cart Removed")
}



const getform = (e) => {
    const copyget = [...get]
    copyget.splice(e,1)
    setGet(copyget)
    toast.success("Removed")
}


const total = cart.reduce((acc, item)=> acc += (item.price *  item.quentity) , 0) 




    return(
    <UserContext.Provider  value={{data,setData, open,cartdelete, RemoveCart ,setOpen,addcart,cart,formChange,get,form,setForm,formSubmit,getform, total}}>
        {children}
    </UserContext.Provider>
)
}


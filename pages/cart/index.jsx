import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../components/layouts/main'
import CartItem from '../../components/cart/CartItem'
import NoItemCart from '../../components/cart/NoItemCart'
import CartContext from '../../context/CartContext'
import { BACKEND_URI, NEXT_BACKEND_URI } from '../../config/app'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

function CartIndex() {
    // const [cartSize,setCartSize]=useState(0)

    const {cart,removeCart,clearCart} = useContext(CartContext)
    const [cartTotal,setCartTotal]=useState()
    const [cartReady,setCartReady] = useState(false)
    const [requestingPayment, setRequestingPayment] = useState(false)

    const [cartDetails,setCartDetails]= useState([])

    const router = useRouter()

    const handleCheckout=async()=>{
        if(cart.length){

            setRequestingPayment(true)
            const res= await fetch(`${NEXT_BACKEND_URI}/payment/`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                    
                },
                body:JSON.stringify({cart})
    
            })
            if (res.ok){
    
                const data = await res.json()
                toast.success("Redirecting you to payment page...")
                window.location=data.url
                
               
            }
            if(res.status==403){
                setRequestingPayment(false)
                toast.error("Please login to proceed!!")
                await router.push('/auth/login')
            }
            if(!res.ok){
                setRequestingPayment(false)
                toast.error("Sorry there was an error!!")
            }
        }
    }

    useEffect(async()=>{
        if(cart.length >0){

            const res = await fetch(`${BACKEND_URI}/courses/cart/`,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({cart}),
                
                
            })
            
        

            if(res.ok){

                const details = await res.json()
                setCartTotal(details.cart_total)
                setCartDetails([...details.cart_detail])
                setCartReady(true)

            } 
            

        }

    },[])

    const removeCartDetail=(uuid)=>{

        const index = cartDetails.findIndex(detail=>detail.course_uuid===uuid)
        
        if(index > -1){

            const currentCart=[...cartDetails]

            

            currentCart.splice(index,1)

            

            setCartDetails([...currentCart])
            

        }
        
    }

    return (
        <MainLayout>
            <section className="w-full py-14 md:py-20 bg-gray-900 pl-10">
                <h2 className="text-3xl text-gray-100 font-medium">
                    Shopping Cart
                </h2>
            </section>

            <section className="w-full flex flex-col md:flex-row justify-between pt-12 px-10  mb-20">
                <div className=" md:w-8/12 md:mx-auto">
                    <h3 className="text-lg my-2">
                        {cart.length} Course in Cart
                    </h3>

                    {cart.length > 0 && cartReady  ? (
                        <>
                        {
                           cartDetails.length ? cart.map(item=>{
                                
                            const courseItem=cartDetails.find(detail=>item==detail.course_uuid)
                            
                            return (<CartItem key={item} detail={courseItem} removeCart={removeCart} removeCartDetail={removeCartDetail}  />)
                        }):''
                        }   
    
                        </>
                    ) :
                    
                    <NoItemCart/>
                    }
                    
            
                    
                
                </div>
                {cart.length > 0 && <div className="md:w-3/12">
                    <h4 className=" text-gray-400 text-lg">
                        Total:
                    </h4>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold my-2">
                        ${cartTotal}
                    </h2>
                    <button disabled={requestingPayment} onClick={handleCheckout} className="block text-sm md:text-base w-full bg-red-500 my-4 py-3 text-gray-50 rounded font-semibold">
                        { requestingPayment? "Please wait ...": "Checkout"}
                    </button>
                    <button onClick={clearCart} className="block text-sm md:text-base w-full bg-gray-200 my-2 py-3 text-gray-800 rounded font-semibold">
                        Clear Cart
                    </button>
                </div> }

                
    </section>
            
        </MainLayout>
    )
}

export default CartIndex

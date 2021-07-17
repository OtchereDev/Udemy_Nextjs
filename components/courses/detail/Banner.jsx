import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import AuthContext from '../../../context/AuthContext'
import CartContext from '../../../context/CartContext'
import Link from 'next/link'


function Banner({data}) {

    const {addCart,cart,removeCart} = useContext(CartContext)
    const router = useRouter()

    const {course_uuid} = router.query

    
        
    const {user}=useContext(AuthContext) 

    const courses= user?.courses || []


   

    const handleCarting=()=>{
        
        if(cart.includes(course_uuid)){
            
            removeCart(course_uuid)
        } else{
            addCart(course_uuid)

        }
    }
    return (
        <section className="text-gray-50 bg-gray-800 py-14 px-8">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold w-11/12 md:w-8/12 mb-2">
                {data.title}
            </h1>
            <h3 className='text-sm md:text-lg md:w-9/12 lg:w-6/12 mb-2'>
            {data.description.length > 60 ? data.description.slice(0,59) +"..." : data.description}
            </h3>
            <div className="mb-2">
                <button className="text-xs md:text-sm py-1 px-2 cursor-auto bg-yellow-500 text-yellow-700 rounded-md">
                    Bestseller
                </button>
                <span className=" text-xs md:text-base font-semibold m-3  text-yellow-500">{data.rating} rating</span>
                <span className="text-xs md:text-base" >
                    ({data.number_of_rating} ratings) {data.student_no} students
                </span>
            </div>
            <p className="mb-2 md:text-base text-xs">
                Created by <span className="text-blue-400 underline">{data.author}</span>
            </p>
            <h2 className='text-xl md:text-2xl font-semibold mb-2'>
                ${data.price}
            </h2>
            
            {!courses.includes(course_uuid) ? 
                <button onClick={handleCarting} className="py-2 rounded-md px-5 bg-blue-500 font-semibold  text-white">
                    {cart.includes(course_uuid) ? "Remove from cart" : "Add to cart" }
                </button> :
                <Link href={'/course/study/'+course_uuid} >
                
                    <button className="py-2 rounded-md px-5 bg-blue-500 font-semibold  text-white">
                        Start Learning
                    </button>
                </Link>
            
            }
            
        </section>
    )
}

export default Banner

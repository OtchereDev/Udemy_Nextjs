import React, { useContext,useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthContext from '../context/AuthContext'
import CartContext from '../context/CartContext'


export const NavBar = () => {

    const router=useRouter()

    const pushRoute=(route)=> {
        router.push(route)
    }

    const {user,logout}=useContext(AuthContext)

    const {cart} = useContext(CartContext)
    const [term,setTerm]=useState('')

    const handleChange=e=>{
        setTerm(e.target.value)
    }

    const handleSubmit=e=>{
        e.preventDefault()
        router.push('/search/'+term)
        setTerm('')
    }


    return (
        <nav className='flex items-center bg-white justify-between shadow-2xl text-gray-900 py-4  md:py-2 px-6'>
            <div className='w-3/12 md:w-2/12 lg:w-1/12 flex items-center  justify-center mr-4'>
                <Link href='/'>
                
                <img src="/assets/udemy_logo.svg" className="w-full cursor-pointer" alt="logo"/>
                </Link>
                
            </div>
            <form onSubmit={handleSubmit} className="hidden md:flex items-center w-4/12 lg:w-5/12 bg-gray-50 border border-black rounded-full px-2 py-1 lg:py-2">
                <div className="w-1/12 text-2xl flex items-center justify-center">
                    <ion-icon name="search-outline"></ion-icon>
                </div>
                
                <input autoComplete="off" value={term} onChange={handleChange} type="text" name="search_box" placeholder="Search for a anything..." className="w-10/12 py-1 outline-none bg-transparent " />
            </form>
            <div className="w-3/12 flex items-center md:w-2/12 justify-center lg:justify-between">
                
                <a className='hidden lg:block' href="#">
                    Teach on udemy
                </a>

                <Link href='/cart'>
                
                    <div className="flex items-center relative">
                        <div className={"absolute h-4 w-4 bg-red-400 rounded-full -top-2 -right-1 " + `${!cart.length?'hidden':''}`}>

                        </div>
                        <a href="" className="flex items-center justify-center text-2xl">

                            <ion-icon name="cart-outline"></ion-icon>
                        </a>
                    </div>
                </Link>
            </div>
            <div className="w-5/12 md:w-4/12 lg:w-2/12 flex justify-between items-center ">

                {!user ? 
                (<>
                <button onClick={()=>pushRoute('/auth/login')} className="text-sm py-1 px-2 lg:text-base  lg:py-2 rounded-md md:px-5 border border-blue-500 font-semibold text-blue-500  bg-white ">Log In</button>
                <button onClick={()=>pushRoute('/auth/signup')} className="text-sm py-1 px-2 lg:text-base  lg:py-2 rounded-md md:px-5 border bg-blue-500 font-semibold text-white" >Sign Up</button>
                </>) :
                (<>
                <Link href='/user'>
                
                    <p className='text-blue-500 cursor-pointer '>{user.name}</p>
                </Link>
                <button onClick={logout} className="text-sm py-1 px-2 lg:text-base  lg:py-2 rounded-md md:px-5 border bg-red-400 font-semibold text-white" >Logout</button>
                </>)}
            </div>
        </nav>
    )
}

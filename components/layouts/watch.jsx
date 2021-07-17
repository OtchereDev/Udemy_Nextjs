import React from 'react'
import { Footer } from '../Footer'
import Link from 'next/link'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const main = ({children,title}) => {
    
    return (
        <div className='font-primary'>
            <nav className='flex items-center shadow-2xl text-white bg-gray-900 py-3 px-6'>
                <div className='w-3/12 md:w-1/12 flex items-center   justify-center mr-4'>
                    <Link href='/' >
                     
                    <img src="/assets/udemy-red-white.svg" className="w-full cursor-pointer" alt="logo"/>
                    </Link>
                    
                </div>
                <div className='overflow-hidden'>
                | {title}
                </div>
                
            </nav>
            
            <ToastContainer autoClose={20000} />

            {children}

            <Footer/>
        </div>
    )
}

export default main

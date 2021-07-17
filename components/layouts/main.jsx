import React from 'react'
import { Footer } from '../Footer'
import { NavBar } from '../NavBar'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const main = ({children}) => {
    
    return (
        <div className='font-primary'>
            <NavBar/>
            
            <ToastContainer autoClose={20000} />

            {children}

            <Footer/>
        </div>
    )
}

export default main

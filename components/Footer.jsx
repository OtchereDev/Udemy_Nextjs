import React from 'react'

export const Footer = () => {
    return (
        <>
        <footer className='w-full px-10 py-5'>
            <div className="flex flex-col text-sm md:text-base md:flex-row md:items-center justify-between mb-4">

                <div>
                    <a className='text-blue-500 block mb-2' href="">Teach on Udemy</a>
                    <a className='text-blue-500 block mb-2' href="">Get the app</a>
                    <a className='text-blue-500 block mb-2' href="">About us</a>
                    <a className='text-blue-500 block mb-2' href="">Contact us</a>
                    
        
                </div>
        
                <div>
                    <a className='text-blue-500 block mb-2' href="">Careers</a>
                    <a className='text-blue-500 block mb-2' href="">Blog</a>
                    <a className='text-blue-500 block mb-2' href="">Help and Support</a>
                    <a  className='text-blue-500 block mb-2' href="">Affiliate</a>
                </div>
        
                <div>
                    <a className='text-blue-500 block mb-2' href="">Terms</a>
                    <a className='text-blue-500 block mb-2' href="">Privacy policy</a>
                    <a className='text-blue-500 block mb-2' href="">Sitemap</a>
                    
                </div>

            </div>

            <div className='w-full flex  justify-between items-center mt-12'>
                <div className='w-4/12 md:w-1/12 '>
                    <img src="/assets/udemy_logo-red.svg" className='w-full' alt="footer logo"/>
                </div>
                <p className="text-gray-400 text-sm">
                    &copy;2021 Udemy, Inc.
                </p>
            </div>


    </footer>

  
    </>
    )
}

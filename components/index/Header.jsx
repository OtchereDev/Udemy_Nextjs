import { useRouter } from 'next/router'
import React, { useState } from 'react'


const Header = () => {
    const [term,setTerm]=useState('')
    const router =useRouter()
    const handleSubmit=e=>{
        e.preventDefault()
        router.push(`/search/${term}`)

    }
    return (
        <section className="w-full md:h-96 relative flex flex-col md:flex-row md:items-center">
            <div className="h-44 md:absolute w-full md:h-full top-0 left-0" style={{zIndex: 0}} >
                <img src="assets/udemy1.jpg" className="w-full h-full" style={{zIndex: 0}} alt="background"/>
            </div>
            <div className=" relative bg-gray-50 p-5 md:ml-5 md:w-6/12 lg:w-4/12 shadow-2xl">
                <h2 className="text-4xl text-gray-900 font-semibold mb-3">
                    Dream Up
                </h2>
                <p className="mb-3">
                    Ambition accepted. Learn the latest skills to reach your professional goals.
                </p>
                <form onSubmit={handleSubmit} className="flex justify-center w-full px-1 py-2 rounded-md border border-gray-400 ">
                    <input value={term} onChange={e=>setTerm(e.target.value)} type="text" placeholder="What fo you want to learn ?" className="outline-none bg-transparent w-10/12 py-2" name="search_box"/>
                    <div className="flex justify-center items-center text-2xl">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Header

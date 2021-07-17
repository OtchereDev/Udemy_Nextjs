import React from 'react'
import Link from 'next/link'

export const CategoryCard = ({data}) => {
            
    return (
        <Link href={'/course/sector/'+data.uuid}>
        
            <div className="md:w-72 my-2 border rounded-3xl md:rounded border-blue-300 md:border-gray-300    overflow-hidden mx-2 cursor-pointer">
                <div className="hidden md:block w-full h-72">
                    <img src={data.sector_image} className="w-full h-full" alt="sector_card_img"/>
                </div>
                <div className="md:bg-gray-200 px-3 py-2 md:pt-3 md:pb-5 md:px-2">
                    <h3 className='md:text-lg text-blue-400 md:text-black'>
                        {data.sector_name[0].toUpperCase()+data.sector_name.slice(1,data.sector_name.length)}
                    </h3>
                </div>
            </div>
        </Link>
    )
}

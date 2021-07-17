import React from 'react'
import Link from 'next/link'

function CourseListCard({data}) {
    return (
        <Link href={'/course/detail/'+data.course_uuid} >
        
            <div className="w-full flex flex-col md:flex-row cursor-pointer  justify-between border-b pb-3 mt-2">
                <div className="overflow-hidden w-9/12 md:w-3/12 md:mr-2 lg:mr-0 lg:w-2/12 h-36 md:h-40 border rounded-md ">
                    <img src={data.image_url} className="w-full h-full" alt="course_card_img"/>
                </div>

                <div className="w-8/12">

                    <h3 className="font-semibold text-sm md:text-base">
                    {data.title.length > 60 ? data.title.slice(0,59) +"..." : data.title}
                    </h3>
                    <p className="text-xs md:text-sm">
                        {data.description}
                    </p>
                    <h5 className="text-xs  text-gray-400">
                        {data.author.name}
                    </h5>
                    <h3 className="text-xs text-yellow-500 my-1">
                        <span className="font-semibold mr-3">{data.rating}</span> ({data.student_no})
                    </h3>
                    <h3 className="text-xs text-gray-400">
                        22 total hours • {data.total_lectures} lectures 
                    </h3>
                    <button className="text-xs md:text-sm py-1 px-2 cursor-auto bg-yellow-500 text-yellow-700 rounded-md">
                        Bestseller
                    </button>
                </div>
                
                <div className="w-1/12">
                    <h3 className="text-xl font-bold">
                        ${data.price}
                    </h3>

                </div>
            </div>
        </Link>
    )
}

export default CourseListCard

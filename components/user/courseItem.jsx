import React from 'react'
import Link from 'next/link'

function CourseItem({course}) {
    return (
        <Link href={'course/study/'+ course.course_uuid} >
        
            <div className="w-full flex cursor-pointer border-b pb-3 mt-2">
                <div className="w-3/12 overflow-hidden h-14 md:h-20 lg:h-40 overflow-hidden border rounded-md mr-5">
                    <img src={course.image_url} className="w-full h-full" alt="course_card_img"/>
                </div>

                <div className="w-8/12">

                    <h3 className="font-semibold text-sm md:text-base">
                        {course.title}
                    </h3>
                    
                    <h5 className="text-xs  text-gray-400">
                        {course.author.name}
                    </h5>
                    
                </div>
                
            </div>
        </Link>
    )
}

export default CourseItem

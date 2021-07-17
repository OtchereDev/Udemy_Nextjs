import React, { useState } from 'react'
import CourseContentList from './CourseContentList'

function CourseContentSec({section}) {
    const [hidden,setHidden] =useState(true) 

    const changeHidden=()=>{
        setHidden(!hidden)
    }
    
     
    return (
        
                <div >
                    <div onClick={changeHidden} className="flex cursor-pointer justify-between items-center p-2 bg-gray-200 border-b">
                     
                        <div className='flex items-center w-8/12 md:w-10/12 overflow-hidden'>
    
                            <div className="flex justify-center items-center text-xl mr-2">
                                {hidden ? <ion-icon name="chevron-down-outline"></ion-icon>:
                                <ion-icon name="chevron-up-outline"></ion-icon>}
                            </div>
                            <div>
                                <h3 className="md:text-lg font-semibold">

                                    {section.section_title}
                                </h3>
                            </div>
                        </div>
                        <div className="w-4/12 md:w-3/12 lg:w-2/12">
                            <ul className="flex text-xs md:text-base">
                                <li className="mr-1">{section.episodes.length} lecture{section.episodes.length>1 &&'s'}</li>
                                <li>• {section.total_duration}</li>
                            </ul>
                        </div>
                    </div>

                    <CourseContentList  data={section.episodes} hidden={hidden}  />
                    
                   
    
                    
                </div>
    )
}

export default CourseContentSec

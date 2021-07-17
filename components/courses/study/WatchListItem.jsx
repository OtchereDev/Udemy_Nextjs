import React, { useState } from 'react'
import CourseContentItem from '../detail/CourseContentItem'



function WatchListItem({section,setSrc}) {
    const [hidden, setHidden] = useState()
    const handleHidden=()=>{
        setHidden(!hidden)
    }
    return (
        <div>
            <div onClick={handleHidden} className="flex justify-between cursor-pointer items-center p-2 bg-gray-200 border-b">
                
                <div className='flex items-center justify-between w-full'>

                    <div>
                        <h3 className=" ">
                            
                            {section.section_title}
                        </h3>
                    </div>
                    <div className="flex justify-center items-center text-xl mr-2">
                        {hidden ?<ion-icon name="chevron-down-outline"></ion-icon> :
                        <ion-icon name="chevron-up-outline"></ion-icon>}
                    </div>
                </div>
                
            </div>

            <div className={ hidden ? "bg-white hidden" :"bg-white " }>
                {
                    section.episodes.map((data,index)=>(<CourseContentItem  setSrc={setSrc} key={index} data={data} />))
                }
                
                
            </div>
        </div>
    )
}

export default WatchListItem

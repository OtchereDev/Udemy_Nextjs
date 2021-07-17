import React from 'react'

function CourseContentItem({data,setSrc}) {

    const handleClick=()=>{
        if(setSrc){
            setSrc(data.file)
        }
        
    }

    return (
            <div onClick={handleClick} className=" cursor-pointer flex justify-between items-center px-3 py-2">
                <div className="flex ">
                    <div className="mr-1 flex items-center justify-center">
                        <ion-icon name="caret-forward-circle"></ion-icon>
                    </div>
                    <div>
                        <h3 className="text-sm md:text-lg font-medium ">

                            {data.title}
                        </h3>
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-base'>
                        {data.length}
                    </p>
                </div>
            </div>
        
    )
}

export default CourseContentItem

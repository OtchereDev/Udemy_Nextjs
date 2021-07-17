import React from 'react'

function commentMsg({comment}) {
    const colors=['blue','indigo','red','yellow','green']
    const color=Math.floor(Math.random() * 4)
    return (
        <div className='flex py-4 border-b '>
            <div className="flex justify-center mr-3">
                <div className={`md:h-16 h-11 w-11 md:w-16 rounded-full flex justify-center items-center bg-${colors[color]}-600`} >
                    <p className='text-gray-100 font-semibold'>
                        {comment.user.name[0].toUpperCase()}
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <h3 className="md:text-xl  font-semibold my-3">
                    {comment.user.name}
                </h3>
                <p className="w-10/12 text-sm md:text-base">
                    {comment.message}
                </p>
            </div>
        </div>
    )
}

export default commentMsg

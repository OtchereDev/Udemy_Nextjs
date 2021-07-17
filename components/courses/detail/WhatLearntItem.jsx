import React from 'react'

function WhatLearntItem({msg}) {
    return (
        <div className="flex my-2 md:my-0">
            <div className='mr-2 text-xl'>
                <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <p>
                
                {msg}
            </p>
        </div>
    )
}

export default WhatLearntItem

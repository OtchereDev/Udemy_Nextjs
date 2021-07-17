import React from 'react'
import WatchListItem from './WatchListItem'

function WatchList({sections,setSrc}) {
    return (
        <>

        {
            sections.map((section,index)=>(
                <WatchListItem key={index} setSrc={setSrc} section={section} />

            ))
        }
        
            
        </>
                
    )
}

export default WatchList

import React from 'react'

export const CompanyCard = ({src,alt,resize}) => {
    return (
        <div className={`w-20 mx-1 ${resize? "flex justify-center items-center":""}`} >
            <img className={resize ? 'w-6/12' :"w-full" }src={src} alt={alt ? alt :""}/>
        </div>
    )
}

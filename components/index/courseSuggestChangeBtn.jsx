export const CourseSuggestChangeBtn = ({name,setSuggest}) => {
    return (
       
            <button onClick={()=>setSuggest(name)} className='text-sm block md:inline md:text-lg font-semibold text-gray-400 hover:text-gray-700 mr-5 focus:outline-none' href="">{name[0].toUpperCase()+name.slice(1,name.length)}</button>
        
    )
}

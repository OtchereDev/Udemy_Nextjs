import React from 'react'
import { CourseCard } from './CourseCard'

 const CourseList = ({data}) => {

    const courses=data.map(sector=>sector.featured_courses)


    return (
        <section className="py-10 bg-white px-10">
        <h3 className="my-5 text-xl font-bold">
            Students are viewing
        </h3>
        <div className='flex flex-col flex-wrap md:flex-row'>
            {courses.map(course_grp=>course_grp.map((course,index)=><CourseCard key={index} data={course} />))}
            
        </div>
    </section>
    )
}

export default CourseList;

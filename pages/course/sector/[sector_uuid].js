import React from 'react'
import MainLayout from '../../../components/layouts/main'
import CourseListCard from '../../../components/courses/list/CourseListCard'
import { BACKEND_URI } from '../../../config/app'

const sector_uuid = ({data:{sector_name,data:courses,total_students}}) => {

    
    return (
        <MainLayout>
            <section className="py-10 px-8 ">
                <h1 className="my-4 text-2xl md:text-3xl font-bold">
                    {sector_name[0].toUpperCase()+sector_name.slice(1,sector_name.length)} Courses
                </h1>

                <h3 className='md:text-lg flex items-center '>
                    <span className="text-xl mr-1 flex items-center">
                        <ion-icon name="people"></ion-icon>
                    </span> {total_students} learners
                </h3>
            
            </section>

            <section className="my-5 px-8">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    All {sector_name[0].toUpperCase()+sector_name.slice(1,sector_name.length)} Courses
                </h1>
                <h4 className="text-sm  md:text-lg md:w-9/12 lg:w-6/12">
                    {sector_name[0].toUpperCase()+sector_name.slice(1,sector_name.length)} instructors on Udemy specialize in everything from software development to data analysis, and are known for their effective, friendly instruction for students of all levels.

                </h4>

                <div className=" flex items-center py-3 px-2 bg-gray-200 border border-gray-400 rounded-sm my-4">
                    <div className=" flex items-center justify-center text-2xl mr-3 text-indigo-800">
                        <ion-icon name="information-circle"></ion-icon>
                    </div>
                    <h3 className="text-sm md:text-base lg:text-lg">
                        Not sure? All courses have a 30-day money-back guarantee

                    </h3>
                </div>
            </section>

            <section className="my-5 px-8 mb-20">
                {
                    courses.map(course=>

                        (<CourseListCard data={course} key={course.course_uuid} />)
                    )
                }
            {/* <CourseListCard/>
            <CourseListCard/> */}
        
            </section>
        </MainLayout>
    )
}

export const getServerSideProps=async({req,res,query:{sector_uuid}})=>{
    const resAPI=await fetch(`${BACKEND_URI}/courses/${sector_uuid}/`)
   
  
    if (!resAPI.ok){
      return {
        redirect:{
            destination:'/',
            permanent:false
        }
      }
    }
  
    const data=await resAPI.json()
    
    // console.log(data)
    
  
    return {
      props:{data}
    }
    
  }

export default sector_uuid

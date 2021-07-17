import React from 'react'
import MainLayout from '../../../components/layouts/main'
import Banner from '../../../components/courses/detail/Banner'
import WhatLearnt from '../../../components/courses/detail/WhatLearnt'
import CourseDetail from '../../../components/courses/detail/CourseDetail'
import Description from '../../../components/courses/detail/Description'
import FeedBack from '../../../components/courses/detail/FeedBack'
import { BACKEND_URI } from '../../../config/app'


const course_uuid = ({data}) => {

    const banner_data={title:data.title,
                        description:data.description,
                        rating:data.student_rating,
                        number_of_rating:data.student_rating_no,
                        author:data.author.name,
                        price:data.price,
                        student_no:data.student_no
                    }
    return (
        <MainLayout>
            <Banner data={banner_data} />
            <WhatLearnt/>
            <CourseDetail sections={data.course_sections} total_length={data.total_duration} total_lectures={data.total_lectures}  />
            <Description info={data.description} />
            <FeedBack comments={data.comment}  />

            
        </MainLayout>
    )
}

export const getServerSideProps=async({req,res,query:{course_uuid}})=>{
    const resAPI=await fetch(`${BACKEND_URI}/courses/detail/${course_uuid}/`)
   
  
    if (!resAPI.ok){
      return {
        redirect:{
          destination:"/",
          permanent:false
        }
      }
    }
  
    const data=await resAPI.json()

    
    return {
      props:{data}
    }
    
  }

export default course_uuid

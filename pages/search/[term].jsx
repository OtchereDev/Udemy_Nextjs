import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MainLayout from '../../components/layouts/main'
import CourseListCard from '../../components/courses/list/CourseListCard'
import { BACKEND_URI } from '../../config/app'


export default function Search({data}) {
    const router=useRouter()
    const {query:{term}}=router
    

  
  return (
    <MainLayout>

        <section className="w-full py-20 bg-gray-900 pl-10 mb-5">
            <h2 className="text-3xl text-gray-100 font-medium">
                Courses on terms "{
                    term
                }"
            </h2>
        </section>
        
        {data && data.length ? 
            <section className="my-5 px-8 mb-20">
            {
                data.map(course=>

                    (<CourseListCard data={course} key={course.course_uuid} />)
                    )
            }
            
        
            </section> : 

            <section className='mb-20'>
                <h3 className='text-2xl my-5 text-center'>
                    No Course found on the provided term "{term}"
                </h3>
            </section>
        }
       


      

    </MainLayout>


      
    
    )
}

export const getServerSideProps=async({req,res,query:{term}})=>{
    const resAPI=await fetch(`${BACKEND_URI}/courses/search/${term}/`)
   
  
    // if (!resAPI.ok){
    //   return {
    //     redirect:{
    //         destination:'/',
    //         permanent:false
    //     }
    //   }
    // }
  
    const data=await resAPI.json()
    
    // console.log(data)
    
  
    return {
      props:{data}
    }
    
  }
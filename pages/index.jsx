import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../components/layouts/main'
import Header from '../components/index/Header'
import CourseSuggest from '../components/index/CourseSuggest'
import CourseList from '../components/index/CourseList'
import CategoryList from '../components/index/CategoryList'
import TeachUdemy from '../components/index/TeachUdemy'
import TrustedCompanies from '../components/index/TrustedCompanies'
import { BACKEND_URI } from '../config/app'




export default function Home({data}) {

  
  return (
    <MainLayout>

      <Header/>
      <CourseSuggest data={data} />
      <CourseList data={data} />
      <CategoryList data={data} />
      <TeachUdemy/>
      <TrustedCompanies/>

    </MainLayout>


      
    
    )
}

export const getServerSideProps=async({req,res})=>{
  const resAPI=await fetch(`${BACKEND_URI}/courses/`)

  if (!resAPI.ok){
    return {
      props:{}
    }
  }

  const data=await resAPI.json()

  

  return {
    props:{data}
  }
  
}


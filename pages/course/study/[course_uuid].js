import React, { useState } from 'react'
import WatchLayout from "../../../components/layouts/watch"
import WatchArea from '../../../components/courses/study/WatchArea'
import CommentArea from '../../../components/courses/study/CommentArea'
import cookie from 'cookie'
import refreshToken from "../../api/refresh_token"
import { BACKEND_URI } from '../../../config/app'


const course_uuid = ({data}) => {
    const [comments,setComments]=useState(data.comment)
    const [title,setTitle]=useState(data.title)
    return (
        <WatchLayout title={title} >
            <WatchArea sections={data.course_sections} />
            <CommentArea comments={comments} setComment={setComments} />
            
        </WatchLayout>
    )
}

export const getServerSideProps=async({req,res,query:{course_uuid}})=>{
    
   
        if (!req.headers.cookie){
            
            
            return {
                redirect:{
                    destination:'/auth/login',
                    permanent:false
                }
            }
           
        }
        
        let {refresh_token}=cookie.parse(req.headers.cookie)
        
        if (!refresh_token){
            
            
            return {
                redirect:{
                    destination:'/auth/login',
                    permanent:false
                }
            }
        }
       
        
        
        let {access_token}=cookie.parse(req.headers.cookie)
        

        if (!access_token){
            const refreshRes= await refreshToken(req,res)
            
            
            if(refreshRes){
                access_token=refreshRes
            }else{

                
                return {
                    redirect:{
                        destination:'/auth/login',
                        permanent:false
                    }
                }
            }
            
            
            
        }

        let resAPI = await fetch(`${BACKEND_URI}/courses/study/${course_uuid}/`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization": `Token ${access_token}`
            }
            
        })

        
        if (resAPI.ok){
            const data= await resAPI.json()

            // console.log(data)
           
            // send data in response
            
            return {
                props:{data}
            }

        }else{
            // send error message
            
            
            return {
                redirect:{
                    destination:'/',
                    permanent:false
                }
            }
        }

    

}

export default course_uuid

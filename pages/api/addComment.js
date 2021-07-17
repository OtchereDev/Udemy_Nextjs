import {BACKEND_URI} from '../../config/app'
import cookie from 'cookie'
import refreshToken from "./refresh_token"

export default async(req,res)=>{
    if (req.method === "POST"){
        
        if (!req.headers.cookie){
           
            res.status(403).json({"message":"Not authorized"})
            return 
        }

        let {refresh_token}=cookie.parse(req.headers.cookie)

        if (!refresh_token){
           
            res.status(403).json({"message":"Not authorized"})
            return 
        }

        
        let {access_token}=cookie.parse(req.headers.cookie)
        

        if (!access_token){
            const refreshRes= await refreshToken(req,res)
            
            
            if(refreshRes){
                access_token=refreshRes
            }else{

                res.status(403).json({"message":"Not authorized"})
                return 
            }
            
            
            
        }

        const body=JSON.parse(req.body)

       
        

        let resAPI = await fetch(`${BACKEND_URI}/courses/comment/${body.course_uuid}/`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                "Authorization": `Token ${access_token}`
            },
            body:JSON.stringify(body.data)
            
        })

        

        
        if (resAPI.ok){
            
           
            
            res.status(200).json({})
           

        }else{
            // send error message
            res.status(403).json({})
            return 
        }

    }else{
        res.setHeader("Allow",["GET"])
        res.status(403).json({"message":`Method  ${req.method} not allowed`})
        return
    }
}
import {BACKEND_URI} from '../../config/app'
import cookie from 'cookie'

export default async(req,res)=>{
    
    if (req.method === "GET" || req.url=='/api/payment'|| req.url=='/api/addComment'){
        
        if (!req.headers.cookie){
           
            return 
        }
        
        const {refresh_token}=cookie.parse(req.headers.cookie)
        

        if (!refresh_token){
       
            return 
        }

        const resAPI = await fetch(`${BACKEND_URI}/auth/jwt/refresh/`,{

            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify({"refresh":refresh_token})
            
        })

        
        if (resAPI.ok){
            const data= await resAPI.json()

            // set access cookie
            res.setHeader("Set-Cookie",cookie.serialize("access_token",data.access,{
                httpOnly:true,
                secure: process.env.NODE_ENV !== "development",
                maxAge: 60,
                sameSite:"strict",
                path: '/'
            }))

            return data.access
            

        }else{
            
            return
        }

    }else{
        
        return
    }
}
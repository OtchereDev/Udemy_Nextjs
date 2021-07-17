import {BACKEND_URI} from '../../config/app'
import cookie from 'cookie'
import refreshToken from "./refresh_token"

export default async(req,res)=>{
    //console.log('running')
    if (req.method === "GET"){
        //console.log(1)
        if (!req.headers.cookie){
            //console.log(2)
            res.status(403).json({"message":"Not authorized"})
            return 
        }

        let {refresh_token}=cookie.parse(req.headers.cookie)

        if (!refresh_token){
            //console.log(3)
            res.status(403).json({"message":"Not authorized"})
            return 
        }

        
        let {access_token}=cookie.parse(req.headers.cookie)
        

        if (!access_token){
            const refreshRes= await refreshToken(req,res)
            //console.log(4)
            
            if(refreshRes){
                access_token=refreshRes
            }else{

                res.status(403).json({"message":"Not authorized"})
                return 
            }
            
            
            
        }

        

        let resAPI = await fetch(`${BACKEND_URI}/auth/users/me/`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "Authorization": `Token ${access_token}`
            },
            
        })
        //console.log(5)
        
        if (resAPI.ok){
            //console.log(6)
            const user= await resAPI.json()
           
            // send user in response
            res.status(200).json({user})
            return user

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
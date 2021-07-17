import {BACKEND_URI} from '../../config/app'
import cookie from 'cookie'
import refreshToken from "./refresh_token"

export default async(req,res)=>{
    if (req.method === "POST"){

        console.log(req.body)

        if(!req.body||!req.body.cart||!req.body.cart.length){
            
            res.status(400).json({"message":"Cart must contain atleast one item"})
            return 
        }

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

        
       const resAPI=await fetch(`${BACKEND_URI}/payments/`,{
           method:"POST",
           headers:{
               Authorization:`Token ${access_token}`,
               "Content-Type":"application/json"
           },
           body:JSON.stringify(req.body.cart)
       })

        if (resAPI.ok){
            const data=await resAPI.json()
            // console.log(data)

            res.status(200).json({url:data.url})
        }else{
            res.status(400).json({})
        }
         


        

    }else{
        res.setHeader("Allow",["POST"])
        res.status(403).json({"message":`Method  ${req.method} not allowed`})
    }
}
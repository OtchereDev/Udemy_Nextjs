import {BACKEND_URI} from '../../config/app'


export default async(req,res)=>{
    if (req.method === "POST"){

        const {email,password,name}=req.body 

        const resAPI = await fetch(`${BACKEND_URI}/auth/users/`,{

            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password,name})
        })

        const data= await resAPI.json()
        
        
        if (resAPI.ok){
            
            res.status(200).json(data)
            return

        }else{
            // send error message
            res.status(401).json(data)
            return
        }

    }else{
        res.setHeader("Allow",["POST"])
        res.status(403).json({"message":`Method  ${req.method} not allowed`})
    }
}
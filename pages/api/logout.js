
import cookie from 'cookie'

export default async(req,res)=>{
    if (req.method === "POST"){
        
          // remove auth cookies
          res.setHeader("Set-Cookie",[cookie.serialize("refresh_token","",{
            httpOnly:true,
            secure: process.env.NODE_ENV !== "development",
            expires: new Date(0),
            sameSite:"strict",
            path: '/'
        },cookie.serialize("access_token","",{
            httpOnly:true,
            secure: process.env.NODE_ENV !== "development",
            expires: new Date(0),
            sameSite:"strict",
            path: '/'
        }))])

        res.status(204).json()

        

    }else{
        res.setHeader("Allow",["POST"])
        res.status(403).json({"message":`Method  ${req.method} not allowed`})
    }
}
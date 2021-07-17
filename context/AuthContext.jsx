import { useRouter } from "next/router";
import { useState, createContext, useEffect } from "react";
import {NEXT_BACKEND_URI} from '../config/app'
import { useSelector, useDispatch } from 'react-redux'
import {addUser,removeUser} from '../redux/slices/AuthSlices'


const AuthContext = createContext()

export const AuthContextProvider=({children})=>{
    const user=useSelector(state=>state.auth.user)
    const [authError,setAuthError]=useState(null)
    const [authReady,setAuthReady]=useState(false)

    const dispatch=useDispatch()

    

    


    const router = useRouter()

    useEffect(()=>checkUserLoggedIn(),[])

    const login=async({email,password})=>{
        const res = await fetch(`${NEXT_BACKEND_URI}/login`,{

            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        
        const data= await res.json()
       

        if (res.ok){
            
            // setUser(data.user)

            await checkUserLoggedIn()            

            router.push('/')
            
        }else{
            
            setAuthError(data.detail)
            
        }

        
    }

    const signup=async({email,password,name})=>{
        const res = await fetch(`${NEXT_BACKEND_URI}/signup`,{

            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({email,password,name})
        })
        
        const data= await res.json()

        if (res.ok){
            
            // setUser(data)

            await login({email,password}) 

            
            
        }else{
            if (data.name){
                
                setAuthError(data.name[0])
            }else if(data.email){
                setAuthError(data.email[0])
            }else{
                setAuthError(data.password.join('\n'))
            }
            
        }

    }

    const logout=async()=>{
        const res= await fetch(`${NEXT_BACKEND_URI}/logout`,{
            method:"POST"
        })

        if (res.ok){
            // setUser(null)
            // push user if necessary
            dispatch(removeUser())
        }
    }

    const checkUserLoggedIn=async()=>{
        
        
            
            const res = await fetch(`${NEXT_BACKEND_URI}/user`)


            
            
            
            if (res.ok){
                const data= await res.json()
                dispatch(addUser(data.user))
                // setUser(data.user)
               
            }else{
                // setUser(null)
                dispatch(addUser(null))
    
                
            }
    
            setAuthReady(true)
    
            return 
        
        
    }

    const clearUser=()=>{
        
        dispatch(removeUser())
    }

    return (
        <AuthContext.Provider value={{user,authError,login,signup,logout,clearUser}}>
            {authReady && children}
        </AuthContext.Provider>
    )
}



export default AuthContext
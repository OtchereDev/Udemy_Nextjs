import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../../components/layouts/main'
import FormInput from '../../components/auth/FormInput'
import AuthBtn from '../../components/auth/AuthBtn'
import Link from 'next/link'
import AuthContext from '../../context/AuthContext'
import { toast } from 'react-toastify'
import cookie from 'cookie'

const signup = () => {

    const {signup,authError,clearUser}= useContext(AuthContext)

    useEffect(()=>clearUser(),[])

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [authReady,setAuthReady]=useState(false)

    useEffect(()=>authError && toast.error(authError),[authError])


    const handleSubmit=async(e)=>{
        e.preventDefault()
        setAuthReady(true)
        await signup({name,email,password})
        setAuthReady(false)
    }

    return (
        <MainLayout>
            <section className="flex justify-center pt-20 min-h-screen">
                <div className="w-10/12 md:w-7/12 lg:w-4/12">
                    <h2 className="text-xl md:text-2xl font-medium py-3 border-b pl-5">
                        Sign Up and Start Learning!
                    </h2>

                    <form onSubmit={handleSubmit}  className="w-full py-4">

                        <FormInput inputVal={name} setInput={setName} type='text' iconName='person' placeholder='Full Name' name="full_name" />
                        <FormInput inputVal={email} setInput={setEmail} type='email' iconName='mail' placeholder='Email' name="email" />
                        <FormInput inputVal={password} setInput={setPassword} type='password' iconName='lock-closed' placeholder='Password' name="password" />
                        

                        <AuthBtn disabled={authReady} action={!authReady ? 'Sign Up' :"Please wait ..."} />

                        <p className="text-center text-xs inline-block pb-4 border-b w-full">
                            By signing up, you agree to our Terms of Use and Privacy Policy.
                        </p>

                        <p className="md:text-lg my-2 text-center ">
                            Already have an account? <span className="text-blue-600 font-medium"><Link href="/auth/login">Log In</Link></span>
                        </p>
                    </form>


                </div>
            </section>
        </MainLayout>
    )
}

export const getServerSideProps=async({req,res})=>{   

    if(req.headers.cookie){

        let cookies=cookie.parse(req.headers.cookie)
        
        if (cookies && cookies.refresh_token){
            
            
            return {
                redirect:{
                    destination:'/',
                    permanent:false
                }
            }
        }
    }
    
   
    return {
        props:{}
    }
    
    

}


export default signup

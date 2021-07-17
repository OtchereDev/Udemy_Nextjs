import { useRouter } from 'next/router'
import React, {useState,useContext} from 'react'
import { toast } from 'react-toastify'
import { NEXT_BACKEND_URI } from '../../../config/app'
import AuthContext from '../../../context/AuthContext'


function CommentBox({setComment,comments}) {

    const [message,setMessage]=useState('')

    const router = useRouter()
    const { course_uuid } = router.query


    const handleChange=(e)=>{
        setMessage(e.target.value)
    }

    const {user:{name}}=useContext(AuthContext)

    const handleClick=async(e)=>{

        e.preventDefault()

        const new_comment={
            user:{
                name
            },
            message,

        }
        // TODO: post comment to API
        const res=await fetch(`${NEXT_BACKEND_URI}/addComment/`,{
            method:'POST',
            body:JSON.stringify({data:{message},course_uuid})
        })

        // console.log(res.ok,(await res).status)
        if (!res.ok){
            toast.error("could not add your comment")
        }else{
            toast.success('comment added')
            setComment([...comments,new_comment])
            setMessage('')
        }



    }


    return (
        <div className='mt-5'>
            <h2 className="text-center text-xl md:text-2xl font-medium mb-4">
                Leave A Comment
            </h2>
            <form  className="w-11/12 md:w-9/12 mx-auto">
                <textarea value={message} onChange={handleChange} placeholder="Leave a comment " className="w-full h-52 outline-none border text-sm md:text-base p-3 resize-none rounded-md" ></textarea>
                <button type='button' onClick={handleClick} className="py-2 rounded-md px-5 border bg-blue-500 font-semibold text-white">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CommentBox

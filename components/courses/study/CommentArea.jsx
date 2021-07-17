import React from 'react'
import CommentMsg from '../commentMsg'
import CommentBox from './CommentBox'

function CommentArea({comments,setComment}) {

    
    
    return (
        <section className="w-full flex justify-center py-10">
        <div className="w-11/12 md:w-10/12 lg:w-8/12">
            <h2 className="text-center  text-2xl font-semibold mb-4">
                Comments
            </h2>

            
            {
               comments.map((comment,index) =>(<CommentMsg key={index} color={Math.floor(Math.random() * 4)} comment={comment} />)) 
            } 
        
            
            

            <CommentBox comments={comments} setComment={setComment} />

        </div>
    </section>
    )
}

export default CommentArea

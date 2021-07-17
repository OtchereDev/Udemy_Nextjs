import React from 'react'
import CommentMsg from '../commentMsg'

function FeedBack({comments}) {
    return (
        <section className="w-full flex justify-center py-10">
            <div className="w-11/12 md:w-8/12">
                <h2 className="text-center text-lg md:text-2xl font-semibold mb-4">
                    Feedbacks
                </h2>

                {   
                    comments.length? comments.map(comment=>(
                        
                        <CommentMsg key={comment.id} color={Math.floor(Math.random() * 4)} comment={comment} />
                    )) : 
                    <h3 className='text-center text-sm md:text-lg mt-3'>
                        No comments
                    </h3>

                }
                
                

            </div>
        </section>
    )
}

export default FeedBack

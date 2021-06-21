import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './comment-list.css'
import CommentItem from './item/CommentItem'




const CommentList: React.FC = React.memo(() => {


    const { coments } = useTypedSelector(state => state.track)
  




    return (
        <div className='comment-list'>


            {coments.reverse().map(comment => {


                 return <CommentItem key={comment.id} commentItem={comment}   />
            })}


        </div>
    )
})

export default CommentList

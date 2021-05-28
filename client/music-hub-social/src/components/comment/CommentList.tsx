import React from 'react'
import CommentItem from './item/CommentItem'


import './comment-list.css'
import { useTypedSelector } from '../../hooks/useTypeSelector'

const CommentList: React.FC = () => {

    const { currentTrack } = useTypedSelector(state => state.track)

    return (
        <div className='comment-list'>

            {currentTrack?.comments.map(comment => {

                return <CommentItem key={comment.id} commentItem={comment} />
            })}
            

        </div>
    )
}

export default CommentList

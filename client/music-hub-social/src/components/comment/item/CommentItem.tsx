import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { IComment } from '../../../types/entity-interfaces'

import './comment.css'



interface ICommentProp {

    commentItem: IComment
}

const CommentItem:React.FC<ICommentProp> = ({commentItem}) => {

    let [author, setAuthor] = useState<string>()

    useEffect(() => {

        axios.get(`${API_URL}users/${commentItem.ownerID}`)
        .then(res => {
            setAuthor(author = res.data.name);
        })
    }, [])

        console.log(author)
    return (
        <div className='comment'>
            <div className="comment___author">{author}</div>
            <div className="comment___text">{commentItem.description}</div>
        </div>
    )
}

export default CommentItem

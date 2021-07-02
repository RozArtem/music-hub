import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { IComment } from '../../../types/entity-interfaces'

import './comment.css'



interface ICommentProp {

    commentItem: IComment

}

const CommentItem: React.FC<ICommentProp> = ({ commentItem }) => {


    const { currentUser, isAuth} = useTypedSelector(state => state.currentUser)
    const {deleteComment} = useActions()


    let [author, setAuthor] = useState<string>()
    let [owner, setOwner] = useState<boolean>(false)


    

    useEffect(() => {


        if (currentUser?.id === commentItem.ownerID) {setOwner(true)}

            axios.get(`${API_URL}api/v1/users/${commentItem.ownerID}`)
                .then(res => {
                    setAuthor(author = res.data.name);
                })


    }, [])


    return (
        <div className='comment'>
            <div className="comment___author">{author}</div>
            <div className="comment___text">
                {commentItem.description}
                {owner && isAuth  ? <div onClick={() => deleteComment(commentItem.id)}
                 className="comment___text___delete">X</div> : null}
            </div>

        </div>
    )
}

export default CommentItem

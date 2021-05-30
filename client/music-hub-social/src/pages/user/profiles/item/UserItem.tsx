
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { API_URL } from '../../../../config'
import { useActions } from '../../../../hooks/useActions'
import { IUser } from '../../../../types/entity-interfaces'
import './user-item.css'









const UserItem: React.FC<IUser> = (user: IUser) => {

    const history = useHistory()

    const {getUserProfile} = useActions()

    let [count, setCount] = useState<any>([])

    useEffect(() => {

        axios.get(`${API_URL}users/${user.id}`)
            .then(res => {
                setCount(count = res.data.tracks);
            })


    }, [])

    function setCurrentProfile() {

        getUserProfile(user.id)
        history.push(`/profile/${user.id}`)
    }

    return (
        <div className='user-item' onClick={() => {setCurrentProfile()}}>
            <div className="user-item___name">
                {user.name}
            </div>
            <div className="user-item___tracks">
                {count.length}  : songs downloaded
            </div>
        </div>
    )
}

export default UserItem


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Loaders from '../../../../components/loaders/Loaders'
import { API_URL } from '../../../../config'
import { useActions } from '../../../../hooks/useActions'
import { IUser } from '../../../../types/entity-interfaces'
import './user-item.css'









const UserItem: React.FC<IUser> = (user: IUser) => {

    const history = useHistory()

    const {getUserProfile, fetchingUserProfile} = useActions()
    
    let [count, setCount] = useState<any>([])

    useEffect(() => {

        axios.get(`${API_URL}api/v1/users/${user.id}`)
            .then(res => {
                setCount(count = res.data.tracks);
            })

          
    }, [])
  
    
  
   
    function setCurrentProfile() {
        fetchingUserProfile()
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

import { cleanup } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../../config'
import { useActions } from '../../../../hooks/useActions'
import { IFethcUser } from '../../../../store/actions-creators/dto'
import { IUser } from '../../../../types/entity-interfaces'



import './user-item.css'




const UserItem: React.FC<IUser> = (user: IUser) => {


    let [count, setCount] = useState<any>([])
    let [name, setName] = useState<any>([])

    useEffect(() => {

        axios.get(`${API_URL}users/${user.id}`)
            .then(res => {
                setCount(count = res.data.tracks);
            })
        axios.get(`${API_URL}users/${user.id}`)
            .then(res => {
                setName(name = res.data);
            })

    }, [])

    
    return (
        <div className='user-item'>
            <div className="user-item___name">
                {name.name}
           </div>
            <div className="user-item___tracks">
                {count.length}  : songs downloaded
            </div>
        </div>
    )
}

export default UserItem

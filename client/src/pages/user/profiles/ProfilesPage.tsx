import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import Loaders from '../../../components/loaders/Loaders'
import Navbar from '../../../components/navbar/Navbar'
import PlayBar from '../../../components/play-bar/PlayBar'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import UserItem from './item/UserItem'



import './profiles.css'

const ProfilesPage: React.FC = () => {

    const { getAllUsersProfiles , fetchingUserProfile} = useActions();
    const { users} = useTypedSelector(state => state.users)
    const { currentUser } = useTypedSelector(state => state.currentUser)

    

    useEffect(() => {

        getAllUsersProfiles(10, 0)
        fetchingUserProfile()
    }, [])

    
   

    return (
        <div className='pofiles'>
            <Navbar />
            <div className="pofiles___list">
               {users.map(user => {

                    if (user.id === currentUser?.id) { return null}

                   return <UserItem key={user.id} {...user} />
               })} 
           
            </div>
            
        </div>
    )
}

export default ProfilesPage


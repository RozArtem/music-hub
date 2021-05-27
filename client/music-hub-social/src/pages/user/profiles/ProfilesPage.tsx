import { cleanup } from '@testing-library/react'
import React, { useEffect } from 'react'
import Navbar from '../../../components/navbar/Navbar'
import PlayBar from '../../../components/play-bar/PlayBar'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import UserItem from './item/UserItem'



import './profiles.css'

const ProfilesPage: React.FC = () => {

    const { getAllUsersProfiles } = useActions();
    const { users } = useTypedSelector(state => state.users)

    useEffect(() => {

        getAllUsersProfiles(10, 0)

    }, [])

    
   

    return (
        <div className='pofiles'>
            <Navbar />
            <div className="pofiles___list">
               {users.map(user => {

                   return <UserItem key={user.id} {...user} />
               })} 
               {users.map(user => {

                   return <UserItem key={user.id} {...user} />
               })} 
               {users.map(user => {

                   return <UserItem key={user.id} {...user} />
               })} 


            </div>
            <PlayBar />
        </div>
    )
}

export default ProfilesPage


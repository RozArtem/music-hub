import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../../components/navbar/Navbar'
import TrackItem from '../../../components/trakc/item/TrackItem'
import TrackList from '../../../components/trakc/TrackList'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import logo from '../../../logo.svg'


import './user-page.css'



const UserPage: React.FC = () => {

    const { currentProfile } = useTypedSelector(state => state.users)
    const { Fav } = useTypedSelector(state => state.album)
    const { getOneTrack, getFavAlbum, getUserProfile} = useActions()


    const history = useHistory()

    useEffect(() => {

        getFavAlbum()
       
    }, [])

    return (

        <div className='user-page'>
            <Navbar />
            <div className='user-page___container'>

                < button className="user-page___container_btn"
                    onClick={() => history.push('/profiles')}
                >BACK</button>

                <div className="user-page___container_info">

                    <div className="user-page___container_info_data">
                        <p className='user-page___container_info_name'>
                            {currentProfile?.name}
                        </p>
                        <p>user's tracks : {currentProfile?.tracks?.length}</p>
                    </div>
                    <img src={logo} alt="logo" />

                </div>


            </div>
            <div className="track-list-container">

            <TrackList tracks={currentProfile?.tracks} />
            </div>
          

        </div>
    )
}

export default UserPage

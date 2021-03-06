import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../../components/navbar/Navbar'
import PlayBar from '../../../components/play-bar/PlayBar'
import TrackItem from '../../../components/trakc/item/TrackItem'
import TrackList from '../../../components/trakc/TrackList'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import logo from '../../../logo.svg'


import './user-page.css'



const UserPage: React.FC = () => {




    const { currentProfile } = useTypedSelector(state => state.users)
    const { albums } = useTypedSelector(state => state.album)
    const {
        getFavAlbum,
        getUserProfile,
        searchUserOwnTraks,
        nullifyOffset,
        getNextForUser } = useActions()

    const history = useHistory()
    const location = history.location.pathname.split('/');

    useEffect(() => {

        nullifyOffset()
        getFavAlbum()
        getUserProfile(location[2])
     

    }, [])




    function seachTrack(query: string) {

        if (query.trim() === '') {
            getUserProfile(location[2])

        }
        searchUserOwnTraks(currentProfile.id, query)
    }

    function onGetNextForUser(count:number, offset:number) {

       console.log(count, offset)
    }
   
    
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

                <TrackList
                    tracks={currentProfile?.tracks}
                    albums={albums}
                    serchFunc={seachTrack}
                    getNextTraks={onGetNextForUser} />
            </div>


        </div>
    )
}

export default UserPage

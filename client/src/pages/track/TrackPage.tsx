
import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './trackpage.css'
import Faav from '../../components/trakc/fav/Faav'
import AlbumList from '../../components/album/AlbumList'

const TrackPage: React.FC = () => {

    const { currentTrack } = useTypedSelector(state => state.track)
    const { albums } = useTypedSelector(state => state.album)
    const { currentProfile } = useTypedSelector(state => state.users)
    const { isAuth } = useTypedSelector(state => state.currentUser)
    const [showAlbumsBlock, setShowAlbumsBlock] = useState<boolean>(false)
    const history = useHistory()

    return (
        <div className='track-page' >
            <Navbar />
            <div className='track-page___container'>

                <div className="func">
                    < button className="track-page___container_btn"
                        onClick={() => history.goBack()}
                    >BACK</button>
                    {isAuth &&

                        <div className="func-container">
                            <Faav track={currentTrack} />
                            {albums.length > 1 &&

                                <div className='item___func___add-to-album'

                                    onMouseEnter={() => { setShowAlbumsBlock(true) }}
                                    onMouseOver={() => { setShowAlbumsBlock(true) }}
                                    onMouseLeave={() => { setShowAlbumsBlock(false) }}
                                >{!showAlbumsBlock && '+'}</div>
                            }
                        </div>



                    }
                    {isAuth && showAlbumsBlock &&

                        <AlbumList setShowAlbumsBlock={setShowAlbumsBlock} track={currentTrack} albums={albums} />
                    }
                </div>


                <div className="track-page___container_info">

                    <img src={API_URL + currentTrack?.picture} alt="picOfTrack" />
                    <div className="track-page___container_info_data">
                        <p className='track-page___container_info_name'>
                            {currentTrack?.name}
                        </p>
                        <div className="track-page___container_info_author"

                            onClick={() => { history.push(`/profile/${currentProfile?.id}`) }}

                        >
                            uploaded by: {currentProfile?.name}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TrackPage

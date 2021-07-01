
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useHistory } from 'react-router'
import { API_URL } from '../../config'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './trackpage.css'
import Faav from '../../components/trakc/fav/Faav'
import AlbumList from '../../components/album/AlbumList'
import { useActions } from '../../hooks/useActions'

const TrackPage: React.FC = () => {


    const { DeleteTrackFromCurrentProfile, getOneTrack} = useActions()

    const { currentTrack } = useTypedSelector(state => state.track)
    const { albums } = useTypedSelector(state => state.album)
    const { currentProfile } = useTypedSelector(state => state.users)
    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const [showAlbumsBlock, setShowAlbumsBlock] = useState<boolean>(false)
    let [owner, setOwner] = useState<boolean>(false)

    const history = useHistory()
    const location = history.location.pathname.split('/');


    function deleteTrack(e: any) {

        e.stopPropagation()
        currentTrack && DeleteTrackFromCurrentProfile(currentTrack?.id)

    }


    useEffect(() => {


        if (currentUser?.id === currentTrack?.authorID) { setOwner(true) }
        getOneTrack(location[2])

    }, [])

    return (
        <div className='track-page' >
            <Navbar />
            <div className="track-page___container">
                <div className="track-page___container_func">
                    < button className="track-page___container_func_btn"
                        onClick={() => history.goBack()}
                    >
                        BACK
                    </button>
                    <div className="track-page___container_func_pic">
                        <img className="track-page___container_func_pic_img"
                            src={API_URL + currentTrack?.picture} alt="trakc img" />

                    </div>
                    <div className="track-page___container_func_func">
                        <Faav track={currentTrack} />
                        {albums.length > 1 &&

                            <div className='track-page___container_func_func_add-to-album'

                                onMouseEnter={() => { setShowAlbumsBlock(true) }}
                                onMouseOver={() => { setShowAlbumsBlock(true) }}
                                onMouseLeave={() => { setShowAlbumsBlock(false) }}
                            >{!showAlbumsBlock && '+'}</div>
                        }
                        {owner && <div className='track-page___container_func_func_delete'
                            onClick={(e) => { deleteTrack(e) }}
                        >х</div>}
                        {isAuth && showAlbumsBlock &&

                            <AlbumList setShowAlbumsBlock={setShowAlbumsBlock} track={currentTrack} albums={albums} />
                        }
                    </div>

                </div>

                <div className="track-page___container__info">
                    <div className="track-page___container_info_name">
                        {currentTrack?.name}
                    </div>

                    <div className="track-page___container_info_author"

                        onClick={() => { history.push(`/profile/${currentProfile?.id}`) }}

                    >
                        uploaded by: {currentProfile?.name}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default TrackPage

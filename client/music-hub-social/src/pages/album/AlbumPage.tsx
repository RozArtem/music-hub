import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/navbar/Navbar'
import PlayBar from '../../components/play-bar/PlayBar'
import TrackList from '../../components/trakc/TrackList'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import logo from '../../logo.svg'

import './album-page.css'


const AlbumPage: React.FC = () => {

    const { currentAlbum, albums } = useTypedSelector(state => state.album)
    const {
        deleteAlbum,
        getAllAlbums,
        searchInAlbum,
        getOneAlbum,
        nullifyOffset,
        getAlbumTraksNext
    } = useActions();

    const history = useHistory()



    useEffect(() => {

        nullifyOffset()
        getAllAlbums()

    }, [])

    function onDeleteAlbum() {

        currentAlbum && deleteAlbum(currentAlbum.id)
        history.push('/home')
    }

    function onSearchInAlbum(query: string) {

        if (query.trim() === '') {
            getOneAlbum(currentAlbum.id)

        }

        searchInAlbum(currentAlbum.id, query)
    }

    function onGetNextTraks(count: number, offset: number, albumID: string) {

        getAlbumTraksNext(count, offset, albumID)
    }

    return (
        <div className='album-page'>
            <Navbar />
            <div className='album-page___container'>

                < button className="album-page___container_btn"
                    onClick={() => history.push('/home')}
                >BACK</button>

                <div className="album-page___container_info">

                    <div className="album-page___container_info_data">
                        <p className='album-page___container_info_name'>
                            {currentAlbum?.name}
                        </p>
                        <p>album's tracks: {currentAlbum?.traks?.length}</p>
                    </div>
                    <img src={logo} alt="logo" />

                    {currentAlbum?.name !== 'favoirite' && <button className='delete'

                        onClick={() => onDeleteAlbum()}
                    > Delete album </button>}

                </div>


            </div>
            <div className="album-page-container">

                <TrackList
                    tracks={currentAlbum?.traks}
                    albums={albums}
                    serchFunc={onSearchInAlbum}
                    getNextTraks={onGetNextTraks} />
            </div>

        </div>
    )
}

export default AlbumPage

import React from 'react'
import { useHistory } from 'react-router'
import Navbar from '../../components/navbar/Navbar'
import TrackList from '../../components/trakc/TrackList'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import logo from '../../logo.svg'

import './album-page.css'


const AlbumPage: React.FC = () => {

    const { currentAlbum } = useTypedSelector(state => state.album)
    const { deleteAlbum } = useActions();

    const history = useHistory()


    function onDeleteAlbum() {

        currentAlbum && deleteAlbum(currentAlbum.id)
        history.push('/home')
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

                <TrackList tracks={currentAlbum?.traks} />
            </div>

        </div>
    )
}

export default AlbumPage
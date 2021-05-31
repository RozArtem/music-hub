import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { ITrack } from '../../../types/entity-interfaces'
import AlbumList from '../../album/AlbumList'


import './item.css'

interface ITrackProps {

    track: ITrack;
    onChoiseTrack: Function;
    onInFav: boolean;

}


const TrackItem: React.FC<ITrackProps> = ({ track, onChoiseTrack, onInFav }) => {

    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const { albums } = useTypedSelector(state => state.album)

    let [owner, setOwner] = useState<boolean>(false)
    const [showAlbumsBlock, setShowAlbumsBlock] = useState<boolean>(false)

    const {
        addFavorite,
        deleteFromFavorite,
        DeleteTrackFromCurrentProfile,
        addTrakcToAlbum
    } = useActions()





    useEffect(() => {


        if (currentUser?.id === track.authorID) { setOwner(true) }

    }, [])

    function addToFavSong(e: any) {

        e.stopPropagation()
        addFavorite(track.id)




    }

    function deleteToFavSong(e: any) {

        e.stopPropagation()
        deleteFromFavorite(track.id)


    }

    function deleteTrack(e: any) {

        e.stopPropagation()
        DeleteTrackFromCurrentProfile(track.id)

    }

    function onBlockAddToAlbum(e: any) {

        e.stopPropagation()
        setShowAlbumsBlock(true)

    }



    return (


        <div className='item' onClick={() => onChoiseTrack(track.id, onInFav)}>
            <div className="item___img">
                <img src={API_URL + track.picture} alt="trakc img" />

            </div>
            <div className="item___play-bar">
                ▶
               </div>
            <div className="item___info">

                <div className="item___name">
                    {track.name}
                </div>

                <div className="item___duration">
                    15:15/!%:!%
               </div>
            </div>
            {
                isAuth &&
                <div className="item___func">
                    <div className={onInFav ? 'item___func___inFav' : 'item___func___add-to-fav'}
                        onClick={(e) => onInFav ? deleteToFavSong(e) : addToFavSong(e)}
                    >❤</div>
                    {albums.length > 1 &&

                        <div className='item___func___add-to-album'

                            onMouseEnter={() => { setShowAlbumsBlock(true) }}
                            onMouseOver={() => { setShowAlbumsBlock(true) }}
                            onMouseLeave={() => { setShowAlbumsBlock(false) }}
                        >+</div>
                    }
                    {owner && <div className='item___func___delete'
                        onClick={(e) => { deleteTrack(e) }}
                    >х</div>}



                </div>

            }

            {isAuth && showAlbumsBlock &&

                <AlbumList setShowAlbumsBlock={setShowAlbumsBlock} />
            }

        </div>


    )


}

export default TrackItem

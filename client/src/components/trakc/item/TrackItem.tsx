import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { STATIC_URL} from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { IAlbum, ITrack } from '../../../types/entity-interfaces'
import AlbumList from '../../album/AlbumList'
import Faav from '../fav/Faav'


import './item.css'

interface ITrackProps {

    track: ITrack;
    onChoiseTrack: Function;
   
    albums: IAlbum[]
}



const TrackItem: React.FC<ITrackProps> = ({ track, onChoiseTrack, albums }) => {

    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const { pause, active, currentTime, duration, audio } = useTypedSelector(state => state.player)


    let [owner, setOwner] = useState<boolean>(false)

    const [showAlbumsBlock, setShowAlbumsBlock] = useState<boolean>(false)


    const {
       
        DeleteTrackFromCurrentProfile,
        setActiveTrack,
        pauseTrack,
        playTrack



    } = useActions()






    useEffect(() => {



        if (currentUser?.id === track.authorID) { setOwner(true) }

    }, [])

   

    function deleteTrack(e: any) {

        e.stopPropagation()
        DeleteTrackFromCurrentProfile(track.id)


    }

    function setPlayTrack(e: any) {

        e.stopPropagation()

        playTrack()



        if (active?.id !== track.id) {
            setActiveTrack(track)

        }


    }

    function setPauseTrack(e: any) {

        e.stopPropagation()
        pauseTrack()



    }



    return (


        <div className='item' onClick={() => onChoiseTrack(track)}>
            <div className="item___img">
                <img src={STATIC_URL + track.picture} alt="trakc img" />

            </div>

            <div className="item___play-bar"

                onClick={(e) => {
                    active?.id === track.id && !pause ?

                        setPauseTrack(e)

                        :

                        setPlayTrack(e)
                }}

            >
                {active?.id === track.id && !pause ?
                    <div className="play-sml">||</div>
                    :
                    <div className="play-sml">{'>'}</div>}
            </div>
            <div className="item___info">

                <div className="item___name">



                    {track.name}

                </div>


            </div>
            {
                isAuth &&
                <div className="item___func">


                    <Faav track={track} />
                    {albums.length > 1 &&

                        <div className='item___func___add-to-album'

                            onMouseEnter={() => { setShowAlbumsBlock(true) }}
                            onMouseOver={() => { setShowAlbumsBlock(true) }}
                            onMouseLeave={() => { setShowAlbumsBlock(false) }}
                        >{!showAlbumsBlock && '+'}</div>
                    }
                </div>


            }
            {owner && <div className='item___func___delete'
                onClick={(e) => { deleteTrack(e) }}
            >??</div>}

            {isAuth && showAlbumsBlock &&

                <AlbumList setShowAlbumsBlock={setShowAlbumsBlock} track={track} albums={albums} />
            }

        </div>


    )


}

export default TrackItem

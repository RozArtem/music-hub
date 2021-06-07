import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { IAlbum, IComment, ITrack } from '../../../types/entity-interfaces'


import './selected-item.css'


interface ITrackProps {

    track: ITrack | null
    fav: boolean
    onSetToggler2: Function

}



const SelectedItem: React.FC<ITrackProps> = ({ track, fav, onSetToggler2 }) => {


    const history = useHistory()
    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const { currentProfile } = useTypedSelector(state => state.users)
    const { active , pause} = useTypedSelector(state => state.player)
    let [owner, setOwner] = useState<boolean>(false)
    const {
        addFavorite,
        deleteFromFavorite,
        DeleteTrackFromCurrentProfile,
        setActiveTrack,
        pauseTrack,
        playTrack

    }
        = useActions()





    useEffect(() => {


        if (currentUser?.id === track?.authorID) { setOwner(true) }


    }, [])


    console.log(currentProfile)
    function addToFavSong(e: any) {

        e.stopPropagation()
        track && addFavorite(track.id)
        onSetToggler2(true)


    }
    function deleteToFavSong(e: any) {

        e.stopPropagation()
        track && deleteFromFavorite(track.id)
        onSetToggler2(false)

    }
    function deleteTrack(e: any) {

        e.stopPropagation()
        track && DeleteTrackFromCurrentProfile(track?.id)

    }

    function setPlayTrack(e: any) {

        e.stopPropagation()

        playTrack()



        if (active?.id !== track?.id) {
            track && setActiveTrack(track)

        }


    }

    function setPauseTrack(e: any) {

        e.stopPropagation()
        pauseTrack()



    }



    return (

        <div className='selected-item'>
            <div className="selected-item___img">
                <img src={API_URL + track?.picture} alt="trakc img" />

            </div>
            <div className="selected-item___play-bar"

                onClick={(e) => {
                    active?.id === track?.id && !pause ?

                        setPauseTrack(e)

                        :

                        setPlayTrack(e)
                }}


            >
                {active?.id === track?.id && !pause ? '||' : '>'}
               </div>
            <div className="selected-item___info">

                <div className="selected-item___name">
                    {track?.name}
                </div>

                <div className="selected-item___author"

                    onClick={() => { history.push(`/profile/${currentProfile?.id}`) }}

                >
                    uploaded by: {currentProfile?.name}
                </div>

                <div className="selected-item___duration">
                    15:15/!%:!%
               </div>
            </div>
            {
                isAuth &&
                <div className="selected-item___func">
                    <div className={fav ? 'item___func___inFav' : 'item___func___add-to-fav'}
                        onClick={(e) => fav ? deleteToFavSong(e) : addToFavSong(e)}
                    >❤</div>
                    <div className='item___func___add-to-album'>+</div>
                    {owner && <div className='selected-item___func___delete'
                        onClick={(e) => { deleteTrack(e) }}
                    >х</div>}

                </div>
            }
        </div>
    )
}

export default SelectedItem

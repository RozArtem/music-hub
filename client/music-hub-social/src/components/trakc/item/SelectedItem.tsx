import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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



const SelectedItem: React.FC<ITrackProps> = ({ track, fav , onSetToggler2}) => {

    const { isAuth } = useTypedSelector(state => state.currentUser)

    const { Fav } = useTypedSelector(state => state.album)
    const { addFavorite, deleteFromFavorite } = useActions()

    let [author, setAuthor] = useState<any>()

    

    useEffect(() => {


     

        axios.get(`${API_URL}users/user/${track?.authorID}`)
            .then(res => {
                setAuthor(author = res.data.name);
            })
    }, [])

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


    return (

        <div className='selected-item'>
            <div className="selected-item___img">
                <img src={API_URL + track?.picture} alt="trakc img" />

            </div>
            <div className="selected-item___play-bar">
                ▶
               </div>
            <div className="selected-item___info">

                <div className="selected-item___name">
                    {track?.name}
                </div>

                <div className="selected-item___author">
                    uploaded by: {author}
                </div>

                <div className="selected-item___duration">
                    15:15/!%:!%
               </div>
            </div>
            {
                isAuth &&
                <div className="selected-item___func">
                    <div className={fav  ? 'item___func___inFav' : 'item___func___add-to-fav'}
                        onClick={(e) => fav  ? deleteToFavSong(e) : addToFavSong(e)}
                    >❤</div>
                    <div className='item___func___add-to-album'>+</div>
                    <div className='selected-item___func___delete'>х</div>
                </div>
            }
        </div>
    )
}

export default SelectedItem

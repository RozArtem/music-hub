import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { ITrack } from '../../../types/entity-interfaces'


import './item.css'

interface ITrackProps {

    track: ITrack;
    onChoiseTrack: Function;
    onInFav: boolean;
 
}


const TrackItem: React.FC<ITrackProps> = ({ track, onChoiseTrack, onInFav }) => {

    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
  
    let [owner, setOwner] = useState<boolean>(false)

    const { addFavorite, deleteFromFavorite , getFavAlbum} = useActions()

    const [inFav, setinFav] = useState<boolean>(false)



    useEffect(() => {
        
      
        if (currentUser?.id === track.authorID) {setOwner(true)}
        
    }, [])

    function addToFavSong(e: any) {

        e.stopPropagation()
        addFavorite(track.id)
        setinFav(true)
    
     

    }
    function deleteToFavSong(e: any) {

        e.stopPropagation()
        deleteFromFavorite(track.id)
        setinFav(false)
     
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
                    <div className={ onInFav ? 'item___func___inFav' : 'item___func___add-to-fav'}
                        onClick={(e) => onInFav ? deleteToFavSong(e) : addToFavSong(e)}
                    >❤</div>
                    <div className='item___func___add-to-album'>+</div>
                    {owner && <div className='item___func___delete'>х</div> }
                </div>
            }
        </div>


    )


}

export default TrackItem

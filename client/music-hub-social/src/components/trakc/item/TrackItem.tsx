import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { ITrack } from '../../../types/entity-interfaces'


import './item.css'

interface ITrackProps {

    track: ITrack;
    onChoiseTrack: Function
}


const TrackItem: React.FC<ITrackProps> = ({track, onChoiseTrack}) => {

    const { isAuth } = useTypedSelector(state => state.currentUser)
 
    const {addFavorite, deleteFromFavorite} = useActions()
    

    const [inFav, setInFav] = useState<boolean>(false)
   

  

    function addToFavSong(e:any) {
        
        e.stopPropagation()
        addFavorite(track.id)
        
    }
    function deleteToFavSong(e: any ){

        e.stopPropagation()
        deleteFromFavorite(track.id)
       
    }

    
    return (
        <div className='item' onClick={() => onChoiseTrack(track.id)}>
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
                    <div className={  true ? 'item___func___inFav'  :'item___func___add-to-fav'  }
                        onClick={(e) => inFav ? deleteToFavSong(e) : addToFavSong(e) }
                    >❤</div>
                    <div className='item___func___add-to-album'>+</div>
                    <div className='item___func___delete'>х</div>
                </div>
            }
        </div>


    )


}

export default TrackItem

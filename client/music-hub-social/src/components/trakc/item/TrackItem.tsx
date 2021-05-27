import React from 'react'
import { API_URL } from '../../../config'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { ITrack } from '../../../types/entity-interfaces'


import './item.css'

interface ITrackProps {

    track: ITrack;
    onChoiseTrack: Function
}


const TrackItem: React.FC<ITrackProps> = ({track, onChoiseTrack}) => {

    const { isAuth } = useTypedSelector(state => state.currentUser)



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
                    <div className='item___func___add-to-fav'>❤</div>
                    <div className='item___func___add-to-album'>+</div>
                    <div className='item___func___delete'>х</div>
                </div>
            }
        </div>


    )


}

export default TrackItem
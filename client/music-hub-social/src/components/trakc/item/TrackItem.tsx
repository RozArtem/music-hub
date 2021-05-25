import React from 'react'
import { ITrack } from '../../../types/entity-interfaces'


import './item.css'



const TrackItem: React.FC<ITrack> = (prop: ITrack) => {
    return (
        <div className='item'>
            <div className="item___img">
                <img src="" alt="trakc img" />
            </div>
            <div className="item___play-bar">
                    ▶
               </div>
            <div className="item___info">
               
                <div className="item___name">
                    {prop.name}
                </div>

                <div className="item___duration">
                    15:15/!%:!%
               </div>
            </div>
            <div className="item___func">
                <div className='item___func___add-to-fav'>❤</div>
                <div className='item___func___add-to-album'>+</div>
                <div className='item___func___delete'>х</div>
            </div>

        </div>


    )
}

export default TrackItem

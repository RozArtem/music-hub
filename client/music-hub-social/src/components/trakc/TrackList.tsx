import React from 'react'
import TrackItem from './item/TrackItem'



import './track-list.css'

const TrackList: React.FC = () => {
    return (
        <div className='track-list'>
            <div className="track-list___searc-bar">
            <input  className='track-list___searc-bar___search' type='text' /> 
            <button className='track-list___searc-bar___btn'>SEARCH</button>
            </div>
          <TrackItem />
        </div>
    )
}

export default TrackList

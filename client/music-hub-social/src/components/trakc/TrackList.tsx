import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import TrackItem from './item/TrackItem'



import './track-list.css'

const TrackList: React.FC = () => {

    const { tracks } = useTypedSelector(state => state.track)

    const { getAll } = useActions()


    useEffect(() => { getAll() }, []);


    return (
        <div className='track-list'>
            <div className="track-list___searc-bar">
                <input className='track-list___searc-bar___search' type='text' />
                <button className='track-list___searc-bar___btn'>SEARCH</button>
            </div>
            <div className="track-list___container">
                {tracks.map(track => {

                    return <TrackItem key={track.id} {...track} />
                })}
            </div>


        </div>
    )
}

export default TrackList

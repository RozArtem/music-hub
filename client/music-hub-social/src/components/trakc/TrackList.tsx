import React, { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import CommentList from '../comment/CommentList'
import SelectedItem from './item/SelectedItem'
import TrackItem from './item/TrackItem'



import './track-list.css'

const TrackList: React.FC = () => {

    const { tracks, currentTrack } = useTypedSelector(state => state.track)
    

    const { getAll, getOneTrack } = useActions()


    useEffect(() => { getAll() }, []);


    const [toggler, setToggler] = useState<boolean>(true)


    function ChoiseTrack(trackID: string) {

        getOneTrack(trackID)
        setToggler(false)
    }

    
    
    return (

        <div className='track-list'>
            {toggler ?

                <>
                    <div className="track-list___searc-bar">
                        <input className='track-list___searc-bar___search' type='text' />
                        <button className='track-list___searc-bar___btn'>SEARCH</button>
                    </div>
                    <div className="track-list___container">
                        {tracks.map(track => {
                            return <TrackItem key={track.id} track={track} onChoiseTrack={ChoiseTrack} />
                        })}
                    </div>
                </>
                :
                <>
                    <div className="track-list___searc-bar">
                        <button className='track-list___searc-bar___btn' onClick={() => setToggler(true)}>BACK</button>
                    </div>
                    <SelectedItem track={currentTrack} />
                    <CommentList  />
                </>
            }



        </div>


    )
}

export default TrackList

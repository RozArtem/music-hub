import React from 'react'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import FunctionalBar from '../functional-bar/FunctionalBar'
import TrackList from '../trakc/TrackList'



import './func-content.css'

const FunctContent = () => {

  const {tracks} = useTypedSelector(state=>state.track)

   
    return (
        <div className='fucn-content'>
            <FunctionalBar />
            <TrackList tracks={tracks} />
        </div>
    )
}

export default FunctContent

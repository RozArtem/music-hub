import React from 'react'
import FunctionalBar from '../functional-bar/FunctionalBar'
import TrackList from '../trakc/TrackList'



import './func-content.css'

const FunctContent = () => {
    return (
        <div className='fucn-content'>
            <FunctionalBar />
            <TrackList />
        </div>
    )
}

export default FunctContent

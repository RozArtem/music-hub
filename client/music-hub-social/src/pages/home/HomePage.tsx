import React from 'react'
import FunctContent from '../../components/fucn-content/FunctContent'
import FunctionalBar from '../../components/functional-bar/FunctionalBar'
import Navbar from '../../components/navbar/Navbar'
import PlayBar from '../../components/play-bar/PlayBar'
import TrackItem from '../../components/trakc/item/TrackItem'
import TrackList from '../../components/trakc/TrackList'


import './home.css'

const HomePage = () => {
    return (
        <div className='home'>
            <Navbar />
            <FunctContent />
            <PlayBar />
        </div>
    )
}

export default HomePage

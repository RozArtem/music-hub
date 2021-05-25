import React, { useEffect } from 'react'
import FunctContent from '../../components/fucn-content/FunctContent'
import FunctionalBar from '../../components/functional-bar/FunctionalBar'
import Navbar from '../../components/navbar/Navbar'
import PlayBar from '../../components/play-bar/PlayBar'
import TrackItem from '../../components/trakc/item/TrackItem'
import TrackList from '../../components/trakc/TrackList'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'



import './home.css'

const HomePage = () => {

    useTypedSelector(state => state.currentUser)

    const {auth} = useActions()

    useEffect(() => {auth()}, [])

    return (
        <div className='home'>
            <Navbar />
            <FunctContent />
            <PlayBar />
        </div>
    )
}

export default HomePage

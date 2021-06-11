import React, { useEffect } from 'react'
import FunctContent from '../../components/fucn-content/FunctContent'

import Navbar from '../../components/navbar/Navbar'
import PlayBar from '../../components/play-bar/PlayBar'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'



import './home.css'

const HomePage = () => {

    const { isAuth } = useTypedSelector(state => state.currentUser)

    const { getAllAlbums, getFavAlbum, getAll, auth, nullifyOffset , increaseOffset} = useActions()



    useEffect(() => {

        nullifyOffset()
        getAllAlbums()
        getFavAlbum()
        
        auth()

    }, [isAuth])

 useEffect(()=> {  getAll(10, 0)}, [])

    return (
        <div className='home'>
            <Navbar />
            <FunctContent />
           
        </div>
    )
}

export default HomePage

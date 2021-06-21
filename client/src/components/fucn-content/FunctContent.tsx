import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import FunctionalBar from '../functional-bar/FunctionalBar'
import TrackList from '../trakc/TrackList'



import './func-content.css'

const FunctContent = () => {

  const {tracks} = useTypedSelector(state=>state.track)
  const {albums} = useTypedSelector(state=>state.album)

  const {search, getNext} = useActions()
   
    return (
        <div className='fucn-content'>
            <FunctionalBar />
            <TrackList tracks={tracks} albums={albums} serchFunc={search} getNextTraks={getNext}/>
        </div>
    )
}

export default FunctContent

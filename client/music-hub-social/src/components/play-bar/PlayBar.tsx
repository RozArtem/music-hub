import React, { SyntheticEvent, useEffect } from 'react'
import { API_URL } from '../../config';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { setAudio } from '../../store/actions-creators/player';



import './play-bar.css'




const PlayBar = React.memo(() => {

    let { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions()


    const audioObj = document.getElementsByTagName('audio')[0]

    useEffect(() => {


    }, [])

   

    function onPlayTrack(e: any) {


        playTrack()


    }
    function onPauseTrack(e: any) {


        pauseTrack()


    }

        if (pause) {

            audioObj.pause()
        }
    
        if(!pause && audioObj) {

            audioObj.play()
        }

    if (!active) {

        return null
    }



    return (
        <div className='play-bar'>


            <audio controls
                src={API_URL + active?.audio}
                onPlay={(e) => onPlayTrack(e)}
                onPause={(e) => onPauseTrack(e)}
                autoPlay={true}
              

            ></audio>


        </div>
    )
})

export default PlayBar

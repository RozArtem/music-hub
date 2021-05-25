import React from 'react'




import './play-bar.css'

const PlayBar = () => {
    return (
        <div className='play-bar'>
             <div className="play-bar___play-bar">
                 <div className="play-bar___play-bar___left">▶</div>
                 <div className="play-bar___play-bar___play">▶</div>
                 <div className="play-bar___play-bar___rught">▶</div>
             </div>
             <div className="play-bar___track-info">
                 <div className="name">name</div>
                 <progress max={100} value={33}></progress>
                 <div className="duration">15:15/15:15</div>
             </div>
        </div>
    )
}

export default PlayBar

import React from 'react'


import './item.css'

const TrackItem = () => {
    return (
        <div className='item'>
            <div className="item___img">
                <img src="" alt="trakc img" />
            </div>
           <div className="item___info">
               <div className="item__name">
                   <p>Name</p>
               </div>
               <div className="item___duration">
                   15:15/!%:!%
               </div>
           </div>
           <div className="item___func">
               <button className='item___func___add-to-fav'>+</button>
               <button className='item___func___add-to-album'>+</button>
               <button className='item___func___delete'>x</button>
           </div>
           
        </div>

        
    )
}

export default TrackItem

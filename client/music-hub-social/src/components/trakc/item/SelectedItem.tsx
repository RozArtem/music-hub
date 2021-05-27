import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { API_URL } from '../../../config'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { IComment, ITrack } from '../../../types/entity-interfaces'


import './selected-item.css'


interface ITrackProps {

    track: ITrack | null
    
}



const SelectedItem : React.FC<ITrackProps>= ({track}) => {

    const {isAuth} = useTypedSelector(state=>state.currentUser)

    let [author, setAuthor] = useState<any>()
 
    useEffect(() => {
        axios.get(`${API_URL}users/user/${track?.authorID}`)
            .then(res => {
                setAuthor(author = res.data.name);
            })
    }, [])

   console.log(author)
    return (

        <div className='selected-item'>
            <div className="selected-item___img">
                <img src={API_URL + track?.picture} alt="trakc img" />

            </div>
            <div className="selected-item___play-bar">
                ▶
               </div>
            <div className="selected-item___info">

                <div className="selected-item___name">
                    {track?.name}
                </div>

                <div className="selected-item___author">
                uploaded by: {author}
                </div>

                <div className="selected-item___duration">
                    15:15/!%:!%
               </div>
            </div>
            {
                isAuth &&
                <div className="selected-item___func">
                    <div className='selected-item___func___add-to-fav'>❤</div>
                    <div className='selected-item___func___add-to-album'>+</div>
                    <div className='selected-item___func___delete'>х</div>
                </div>
            }
        </div>
    )
}

export default SelectedItem

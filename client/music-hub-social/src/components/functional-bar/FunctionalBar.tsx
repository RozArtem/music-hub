import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'



import './func.css'


const FunctionalBar: React.FC = () => {

    const { isAuth } = useTypedSelector(state => state.currentUser)
    const { albums } = useTypedSelector(state => state.album)

    const {creatAlbum} = useActions();

    const [toggler, setToggler] = useState<boolean>(false)
    const [albumName, setAlbumName] = useState<string>('')



    function onCreatAlbum() {

        creatAlbum(albumName)
        setToggler(false)
        
    }

    return (
        <div className='functional-bar'>
            {!isAuth ?
                <div className='functional-bar___info-block'>
                    <p>Do you want to download any song? Or add any for your favorites ...</p>
                    <NavLink
                        className='functional-bar___info-block___link'
                        to='/authorization-page'>
                        sign in for features or create an account
                    </NavLink>
                </div>
                :
                <div className="functional-bar___container">

                    <button className='functional-bar___button'>ADD NEW</button>
                    {toggler ?

                        <div className="functional-bar___creator-album-box">
                            <button className='functional-bar___button'
                                onClick={() => setToggler(false)}
                            > CANCEL
                             </button>
                            <input type="text" autoFocus
                                onChange={(event) => setAlbumName(event.target.value)} />
                            <button
                                onClick={() => onCreatAlbum()}
                            >CREAT</button>
                        </div>

                        :

                        <button className='functional-bar___button'
                            onClick={() => setToggler(true)}> CREAT ALBUM
                        </button>
                    }




                    {albums.map(album => {

                        return <button className='functional-bar___button'>{album?.name}</button>
                    })}

                </div>

            }

        </div>
    )
}

export default FunctionalBar

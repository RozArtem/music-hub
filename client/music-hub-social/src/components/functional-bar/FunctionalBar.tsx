import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'



import './func.css'


const FunctionalBar: React.FC = () => {

    const { isAuth } = useTypedSelector(state => state.currentUser)
    const { albums, Fav } = useTypedSelector(state => state.album)

    const { creatAlbum, deleteAlbum } = useActions();

    const [toggler, setToggler] = useState<boolean>(false)
    const [delteToggler, setDeleteToggler] = useState<boolean>(false)
    const [albumName, setAlbumName] = useState<string>('')



    function onCreatAlbum() {

        if (albumName.trim() === '') {

            return alert('Enter the name of your album')
        }
        creatAlbum(albumName)
        setToggler(false)
        setAlbumName('')

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

                    <div className="functional-bar___container-func">

                        <button className='functional-bar___button'>ADD NEW</button>
                        {toggler ?

                            <div className="functional-bar___creator-album-box">
                                <button className='functional-bar___button' style={{ width: '15%' }}
                                    onClick={() => setToggler(false)}
                                > CANCEL
                             </button>
                                <input type="text" autoFocus minLength={3} maxLength={12} placeholder="Enter album's name"
                                    onChange={(event) => setAlbumName(event.target.value)} />
                                <button className='functional-bar___creator-album-box-button'
                                    onClick={() => onCreatAlbum()}
                                >CREAT</button>
                            </div>

                            :

                            <button className='functional-bar___button'
                                onClick={() => setToggler(true)}> CREAT ALBUM
                        </button>
                        }

                        <button className='functional-bar___button'
                        > {Fav?.name}
                        </button>
                    </div>


                    <div className="albums-container">
                        {albums.map(album => {

                            if (album.name === 'favoirite') { return null }
                            return <button className='functional-bar___button'
                                onClick={() => deleteAlbum(album.id)} key={album.id}
                                onMouseEnter={() => setDeleteToggler(true)}
                                onMouseLeave={() => setDeleteToggler(false)}
                            >{album?.name}</button>

                        })}

                    </div>


                </div>

            }

        </div >
    )
}

export default FunctionalBar

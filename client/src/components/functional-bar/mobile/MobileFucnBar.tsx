import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'



import './mobile-func-bar.css'

const MobileFucnBar = () => {

    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const { albums, Fav } = useTypedSelector(state => state.album)
    const history = useHistory()
    const { creatAlbum, getOneAlbum, getUserProfile, HideFucnBar } = useActions();

    const [toggler, setToggler] = useState<boolean>(false)
    const [showAlbum, setShowAlbum] = useState<boolean>(false)
    const [albumName, setAlbumName] = useState<string>('')



    function onCreatAlbum(e:any) {

        e.stopPropagation()
        if (albumName.trim() === '') {

            return alert('Enter the name of your album')
        }
        creatAlbum(albumName)
        setToggler(false)
        setAlbumName('')

    }

    function selectAlbum(albumID: string): void {

        getOneAlbum(albumID)
        history.push(`/albums/${albumID}`)
    }

    function moveToMyProfile() {

        getUserProfile(currentUser?.id || '')
        history.push(`/profile/${currentUser?.id}`)
    }

    function hideMenu(e:any) {
        e.stopPropagation()
        HideFucnBar()
    }

    return (
        <div className="wraper" onClick={(e) => {hideMenu(e)}}>
            <div className='mobile-functional-bar'>

                <ul className="mobile-functional-bar-nav-content">
                    {isAuth && <li onClick={() => moveToMyProfile()}><a >My profile</a></li>}
                    <li> <NavLink to='/profiles' ><a >Profiles</a></NavLink></li>
                </ul>

                {!isAuth ?
                    <div className='mobile-functional-bar___info-block'>
                        <p>Do you want to download any song? Or add any for your favorites ...</p>
                        <NavLink
                            className='mobile-functional-bar___info-block___link'
                            to='/authorization-page'
                            onClick={() => { HideFucnBar() }}
                        >
                            sign in for features or create an account
                        </NavLink>
                    </div>
                    :
                    <div className="mobile-functional-bar___container">

                        <div className="mobile-functional-bar___container-func">

                            <button className='mobile-functional-bar___button'
                                onClick={() => history.push('/add-track')}

                            >ADD NEW</button>

                            <button className='mobile-functional-bar___button'
                                onClick={() => setToggler(true)}> CREAT ALBUM
                            </button>
                            {toggler &&

                                <div className="mobile-functional-bar___creator-album-box">

                                    <input type="text" autoFocus minLength={3} maxLength={12} placeholder="Enter album's name"
                                        onChange={(event) => setAlbumName(event.target.value)} />

                                    <div className='btn-box'>

                                        <button className='mobile-functional-bar___creator-album-box-button-left'
                                            onClick={() => setToggler(false)}
                                        >
                                            CANCEL
                                        </button>
                                        <button className='mobile-functional-bar___creator-album-box-button-right'
                                            onClick={(e) => onCreatAlbum(e)}
                                        >
                                            CREAT
                                        </button>
                                    </div>

                                </div>

                            }

                            <button className='mobile-functional-bar___button'
                                onClick={() => selectAlbum(Fav.id)}
                            > {Fav?.name}
                            </button>
                        </div>

                        {albums.length > 1 &&

                            <div className="albums"

                                onClick={() => { showAlbum ? setShowAlbum(false) : setShowAlbum(true) }}

                            >{showAlbum ?

                                <div className='hide-albums'>
                                    <div> ◠</div>
                                    <div> hide albums</div>
                                </div>


                                :

                                <div className='show-albums'>
                                    <div> show albums</div>
                                    <div> ◡</div>
                                </div>


                                } </div>
                        }


                        {showAlbum &&

                            <div className="albums-container">
                                {albums.map(album => {

                                    if (album.name === 'favoirite') { return null }
                                    return <button className='mobile-functional-bar___button'
                                        key={album.id}
                                        onClick={() => selectAlbum(album.id)}
                                    >{album?.name}</button>

                                })}

                            </div>



                        }


                    </div>

                }

            </div >
        </div>

    )
}



export default MobileFucnBar

import React, { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { IAlbum, ITrack } from '../../types/entity-interfaces'
import CommentList from '../comment/CommentList'
import SelectedItem from './item/SelectedItem'
import TrackItem from './item/TrackItem'



import './track-list.css'

interface ITrackListProps {

    tracks: ITrack[]
    albums: IAlbum[]
    serchFunc: Function
    getNextTraks: Function
}



const TrackList: React.FC<ITrackListProps> = ({ tracks, albums, serchFunc, getNextTraks }) => {

    const { getOneTrack,
        addCommentToTrack,
        getAll,
        getUserProfile,
        increaseOffset,
        decreaseOffset } = useActions()

    const { currentTrack, offset, countOfAll } = useTypedSelector(state => state.track)
    const { Fav } = useTypedSelector(state => state.album)
    const { isAuth } = useTypedSelector(state => state.currentUser)






    const [toggler, setToggler] = useState<boolean>(true)
    const [serching, setSerching] = useState<boolean>(false)
    const [checkInFavForSelected, setCheckInFavForSelected] = useState<boolean>(true)
    const [description, setDescription] = useState<string>('')
    const [serchValue, setSerchValue] = useState<string>('')

    let list: Element

    useEffect(() => {

        list = document.getElementsByClassName('track-list___container')[0];
        list?.addEventListener('scroll', ScrollHandler)

    }, [toggler])

    useEffect(() => {

       
        
        
        if (tracks.length < countOfAll) {

            getNextTraks(10, offset )
           
        } else {


        }

    }, [offset])



    function ChoiseTrack(track: ITrack, onInFav: boolean) {

        getOneTrack(track.id)
        setToggler(false)
        getUserProfile(track?.authorID || '')
        setCheckInFavForSelected(onInFav)
    }

    function addComment(trackID: any) {

        if (description.trim() === '') { alert("Comment cannot be empty, please leave a text") }

        addCommentToTrack(description, trackID)

        setDescription('')
    }



    function onSearch() {

        if (serchValue.trim() === '') {
            getAll()
            setSerching(false)
        }

        serchFunc(serchValue)
        setSerching(true)
    }

    function ScrollHandler(e: any) {



     
        if (list.scrollHeight === (list.clientHeight + list.scrollTop) ) {

          

               increaseOffset()   

        }

  

    }

    console.log(tracks.length, countOfAll)
    return (

        <div className='track-list'>
            {toggler ?

                <>
                    {serching || tracks && tracks?.length >= 10 ? <div className="track-list___searc-bar">
                        <input className='track-list___searc-bar___search' type='text'
                            value={serchValue}
                            onChange={(e) => { setSerchValue(e.target.value) }}
                        />
                        <button className='track-list___searc-bar___btn'
                            onClick={() => { onSearch() }}
                        >SEARCH</button>
                    </div>

                        :
                        null
                    }
                    <div className="track-list___container">

                        {

                            tracks?.map(track => {

                                let inFav = false;

                                Fav?.traks.map(item => {
                                    if (item.id === track.id) {

                                        inFav = true

                                    }

                                })

                                return <TrackItem
                                    onInFav={inFav}
                                    key={track.id}
                                    track={track}
                                    onChoiseTrack={ChoiseTrack}
                                    albums={albums} />
                            })
                        }

                    </div>
                </>
                :
                <>
                    <div className="track-list___searc-bar">
                        <button className='track-list___searc-bar___btn' onClick={() => setToggler(true)}>BACK</button>
                    </div>


                    <SelectedItem
                        track={currentTrack}
                        fav={checkInFavForSelected}
                        onSetToggler2={setCheckInFavForSelected}
                    />



                    {isAuth ?
                        <div className="comment-list___coment-area">
                            <textarea name="comment" maxLength={255} minLength={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                            <button

                                onClick={() => addComment(currentTrack?.id)}
                            >Leave comment</button>
                        </div>
                        :
                        <div className="comment-list___coment-area">
                            Comments can be posted only by authorized users
                        </div>
                    }

                    <CommentList />
                </>
            }



        </div>


    )
}

export default TrackList

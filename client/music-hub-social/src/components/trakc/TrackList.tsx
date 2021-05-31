import React, { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { ITrack } from '../../types/entity-interfaces'
import CommentList from '../comment/CommentList'
import SelectedItem from './item/SelectedItem'
import TrackItem from './item/TrackItem'



import './track-list.css'

interface ITrackListProps {

    tracks: ITrack[] | undefined
}


const TrackList: React.FC<ITrackListProps> = ({ tracks }) => {

    const { getOneTrack, addCommentToTrack } = useActions()

    const { currentTrack } = useTypedSelector(state => state.track)
    const { Fav } = useTypedSelector(state => state.album)
    const { isAuth } = useTypedSelector(state => state.currentUser)





    const [toggler, setToggler] = useState<boolean>(true)
    const [checkInFavForSelected, setCheckInFavForSelected] = useState<boolean>(true)
    const [description, setDescription] = useState<string>('')


    useEffect(() => {



    }, [])

    function ChoiseTrack(trackID: string, onInFav: boolean) {

        getOneTrack(trackID)
        setToggler(false)

        setCheckInFavForSelected(onInFav)
    }

    function addComment(trackID: any) {

        if (description.trim() === '') { alert("Comment cannot be empty, please leave a text") }

        addCommentToTrack(description, trackID)

        setDescription('')
    }


    return (

        <div className='track-list'>
            {toggler ?

                <>
                  {tracks && tracks?.length >= 10 && <div className="track-list___searc-bar">
                        <input className='track-list___searc-bar___search' type='text' />
                        <button className='track-list___searc-bar___btn'>SEARCH</button>
                    </div> }  
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
                                    onChoiseTrack={ChoiseTrack} />
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

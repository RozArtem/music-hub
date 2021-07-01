import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { ITrack } from '../../../types/entity-interfaces'


import './faav.css'

interface IFaav {

    track: ITrack | null

}


const Faav: React.FC<IFaav> = ({ track }) => {

    const { Fav } = useTypedSelector(state => state.album)
    const { addFavorite, deleteFromFavorite } = useActions()






    const itemInFav = Fav.traks.find(item => item.id === track?.id)

    function deleteTrack(e: any) {
        e.stopPropagation()
        track &&  deleteFromFavorite(track.id)
    }
    function addTrack(e: any) {
        e.stopPropagation()
        track && addFavorite(track.id)
    }

    return (
       
            <div className={itemInFav ? 'fav___inFav' : 'fav___add-to-fav'}
                onClick={(e) => itemInFav ? deleteTrack(e) : addTrack(e)}
            >&#x2764;</div>


      
    )
}

export default Faav

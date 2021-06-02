import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { IAlbum, ITrack } from '../../../types/entity-interfaces'



import './inalbum.css'

interface IInAlbum {

    album: IAlbum
    track: ITrack
}


const InAlbum: React.FC<IInAlbum> = ({ album,
    track }) => {


    const { addTrakcToAlbum, deleteFromAlbum } = useActions()



    const itemInAlbum = album.traks?.find(item => item.id === track.id)






    function deleteTrack(e: any) {
        e.stopPropagation()
        deleteFromAlbum(album.id, track.id)
    }
    function addTrack(e: any) {
        e.stopPropagation()
        addTrakcToAlbum(track.id, album.id)

    }

    console.log(itemInAlbum)
    return (

        <div >
            <div className="inalbum"
                onClick={(e) => { itemInAlbum ? deleteTrack(e) : addTrack(e) }}>
                <div>{album.name}</div>
                {itemInAlbum && <div>✓</div>}

            </div>
        </div>
    )
}

export default InAlbum

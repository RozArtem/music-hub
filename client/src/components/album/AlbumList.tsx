import React, { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { IAlbum, ITrack } from '../../types/entity-interfaces'
import './album-list.css'
import InAlbum from './in-album/InAlbum'

interface IAlbumListProps {

    setShowAlbumsBlock: Function
    track: ITrack | null
    albums: IAlbum[]


}


const AlbumList: React.FC<IAlbumListProps> = ({ setShowAlbumsBlock, track, albums }) => {





    return (

        <div className="album-block-wraper">
            <div className="albums-block"
                onMouseEnter={() => { setShowAlbumsBlock(true) }}
                onMouseOver={() => { setShowAlbumsBlock(true) }}
                onMouseLeave={() => { setShowAlbumsBlock(false) }}
            >

                {
                    albums.map(album => {


                        if (album.name === 'favoirite') { return null }

                        return <InAlbum album={album} track={track} key={album.id} />

                    })
                }




            </div >
        </div>


    )
}

export default AlbumList

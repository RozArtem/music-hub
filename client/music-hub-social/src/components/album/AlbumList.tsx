import React from 'react'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { IAlbum } from '../../types/entity-interfaces'
import AlbumItem from './item/AlbumItem'
import './album-list.css'

interface IAlbumListProps {

    setShowAlbumsBlock: Function


}


const AlbumList: React.FC<IAlbumListProps> = ({ setShowAlbumsBlock }) => {


    const { albums } = useTypedSelector(state => state.album)

    console.log(albums.length)

    return (



        <div className="albums-block"
            onMouseEnter={() => { setShowAlbumsBlock(true) }}
            onMouseOver={() => { setShowAlbumsBlock(true) }}
            onMouseLeave={() => { setShowAlbumsBlock(false) }}
        >

            {
                albums.map(album => {

                    if (album.name === 'favoirite') { return null }

                    return <AlbumItem key={album.id} album={album} />
                })
            }




        </div >
    )
}

export default AlbumList

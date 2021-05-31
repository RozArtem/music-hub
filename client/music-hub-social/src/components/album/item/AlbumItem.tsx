import React from 'react'
import { IAlbum } from '../../../types/entity-interfaces'



interface IAlbumProps {

    album: IAlbum
}


const AlbumItem: React.FC<IAlbumProps> = ({ album }) => {
    return (

        <div className="album-item">
            <label htmlFor="album">
                {album.name}
                <input name='album' type="checkbox" />
            </label>
        </div>

    )
}

export default AlbumItem

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { useActions } from '../../hooks/useActions'
import logo from '../../logo.svg'

const AddTrackPage = () => {


    const { addTrack } = useActions()

    const [trackData, setTrackData] = useState<any>()
    const [pictureData, setPictureData] = useState<any>()
    const [name, setName] = useState<any>()

    const history = useHistory()




    function onFileChangesTrack(e: any) {

        setTrackData(e.target.files[0])
    }

    function onFileChangesPic(e: any) {

        setPictureData(e.target.files[0])
    }

    function uploadAction(e: any) {
        
        addTrack(name, pictureData, trackData)
    }
    
    

    return (
        <div className='add-page'>
            <Navbar />
            <div className='album-page___container'>

                < button className="album-page___container_btn"
                    onClick={() => history.push('/home')}
                >BACK</button>

                <div className="album-page___container_info">

                    <div className="album-page___container_info_data">
                        <p className='album-page___container_info_name'>
                            Add your own track
                        </p>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="add-page___form">
                <label htmlFor="name">Choose name for your track</label>
                <input type="text" id="name" name="name" value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <label htmlFor="file">Choose music file to upload</label>
                <input type="file" id="track" name="file"
                    onChange={(e) => { onFileChangesPic(e) }}
                />
                <label htmlFor="track">Choose picture file to upload</label>
                <input type="file" name='track' id="pic"
                    onChange={(e) => { onFileChangesTrack(e) }}
                />

                <button onClick={(e) => { uploadAction(e) }}>add new</button>
            </div>
        </div>
    )
}

export default AddTrackPage

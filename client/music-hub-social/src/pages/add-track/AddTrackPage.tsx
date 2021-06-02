import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import logo from '../../logo.svg'

const AddTrackPage = () => {

    const [trackData, setTrackData] = useState<any>()

    const history = useHistory()

    

    function onFileChanges(e: any) {

        setTrackData(e.target.files[0])
    }
    function uploadAction(e: any) {
        const data = new FormData();
      
        data.append('trackData', trackData);

        console.log(data.get('trackData'))
        console.log(trackData)
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
                <input type="text" id="name" name="name"
                    
                />

                <label htmlFor="file">Choose music file to upload</label>
                <input type="file" id="track" name="file" 
                    onChange={(e) => { onFileChanges(e) }}
                />
                <label htmlFor="track">Choose picture file to upload</label>
                <input type="file" name='track' id="pic" />

                <button onClick={(e) => { uploadAction(e) }}>add new</button>
            </div>
        </div>
    )
}

export default AddTrackPage

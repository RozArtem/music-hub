import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { useActions } from '../../hooks/useActions'
import logo from '../../logo.svg'


import './add-track.css'

const AddTrackPage = () => {


    const { addTrack } = useActions()

    const [trackData, setTrackData] = useState<any>()
    const [pictureData, setPictureData] = useState<any>()
    let [url, setUrl] = useState<any>()
    const [name, setName] = useState<string>('')

    const history = useHistory()




    function onFileChangesTrack(e: any) {

        setTrackData(e.target.files[0])
    }

    function onFileChangesPic(e: any) {

        setPictureData(e.target.files[0])


        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function (e) {
            setUrl(reader.result)

        }


    }


    function uploadAction(e: any) {

        if (name.trim() === '') {

            return alert('Enter the name of your track')
        }

        if (!pictureData || !trackData) {

            return alert('Seletc files for your track')
        }

        addTrack(name, pictureData, trackData)

        setTrackData(null)
        setPictureData(null)
        setName('')
       
    }


    function uploadMockData() {
        
        let customName: string = '0';
       
       for (let i =0; i < 1000; i++) {

        customName = `${i}i`;

        addTrack(customName, pictureData, trackData)
       }
     
    }







    return (
        <div className='add-page'>
            <Navbar />
            <div className='add-page___container'>

                < button className="add-page___container_btn"
                    onClick={() => history.push('/home')}
                >BACK</button>

                <div className="add-page___container_info">

                    <div className="add-page___container_info_data">
                        <p className='add-page___container_info_name'>
                            Add your own track
                        </p>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="add-page___form-container">
                <div className="add-page___form-container___form">
                    <label htmlFor="name">Choose name for your track</label>
                    <input type="text" id="name" name="name" value={name} maxLength={30} minLength={3}
                        onChange={(e) => { setName(e.target.value) }}
                    />

                    <label htmlFor="file">Choose music file to upload</label>
                    <input type="file" id="track" name="file"
                        onChange={(e) => { onFileChangesTrack(e) }}
                    />
                    <label htmlFor="track">Choose picture file to upload</label>
                    <input type="file" name='track' id="pic"
                        onChange={(e) => { onFileChangesPic(e) }}
                    />

                    <button onClick={(e) => { uploadAction(e) }}>add new</button>
                </div>
                <div className="image_pre-load">
                    <img src={!url ? logo : url} alt="" />
                </div>
            </div>

        </div>
    )
}

export default AddTrackPage

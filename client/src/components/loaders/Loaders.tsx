import React from 'react'
import logo from '../../logo.svg'

import './loader.css'

const Loaders = () => {
    return (
        <div className='loader'>
            <div className="loader-icon"><img src={logo} alt="" /></div>
            <div className="loader-block"></div>
        </div>
    )
}

export default Loaders

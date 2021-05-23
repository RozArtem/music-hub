import React from 'react'
import Input from './input/Input'
import { NavLink } from "react-router-dom";


import './auth.css'

const Registration: React.FC = () => {
    return (

        <div className='auth'>
            <div className='authorization'>
                <div className="authorization___header">Registration</div>
                <Input />
                <Input />
                <Input />
                <button className="authorization___btn" >Sign Up</button>
                <div className="authorization___btn2"> have already  account? sign in</div>
            </div>
        </div>

    )
}

export default Registration

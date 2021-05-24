import React from 'react'
import Input from './input/Input'
import { NavLink } from "react-router-dom";


import './auth.css'

const Authorization: React.FC = () => {
 
    
    
 

    
    return (
        <div className='auth'>
            <div className='authorization'>
            <div className="authorization___header">Authorization</div>
            <Input />
            <Input />
            <button className="authorization___btn" >Sign In</button>
            <div className="authorization___btn2">  haven't  account yet? sign up</div>
        </div>
    </div>
    )
}

export default Authorization

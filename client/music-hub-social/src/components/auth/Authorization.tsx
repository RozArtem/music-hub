import React from 'react'
import Input from './input/Input'
import { NavLink } from "react-router-dom";

const Authorization: React.FC = () => {
 
    
    
 

    
    return (
        <div>
            <div className='authorization'>
            <div className="authorization__header">Registration</div>
            <Input />
            <Input />
            <Input />
            <button className="authorization__btn" >Sign Up</button>
            <div className="authorization__btn2">  have already  account? sign in</div>
        </div>
    </div>
    )
}

export default Authorization

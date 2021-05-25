import React, { useState } from 'react'
import Input from './input/Input'
import { NavLink } from "react-router-dom";


import './auth.css'

const Authorization: React.FC = () => {


    const [stateEmail, setEmail] = useState<string>('')
    const [statePassword, setPassword] = useState<string>('')


    return (
        <div className='auth'>
            <div className='authorization'>
                <div className="authorization___header">Authorization</div>
                <Input setValue={setEmail} value={stateEmail} type='text' placeholder='Enter your email' />
                <Input setValue={setPassword} value={statePassword} type='password' placeholder='Enter your password' />
                <button className="authorization___btn" >Sign In</button>
                <div className="authorization___btn2">  haven't  account yet? sign up</div>
            </div>
        </div>
    )
}

export default Authorization

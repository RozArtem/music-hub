import React, { useEffect, useState } from 'react'
import Input from './input/Input'
import { NavLink } from "react-router-dom";
import './auth.css'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';



interface IAuthorization {
    setComponent: Function;
}


const Authorization: React.FC<IAuthorization> = ({ setComponent }: IAuthorization) => {

    const { error } = useTypedSelector(state => state.currentUser)
    const { login } = useActions();

    const [stateEmail, setEmail] = useState<string>('')
    const [statePassword, setPassword] = useState<string>('')

 

    return (
        <div className='auth'>
            <div className='authorization'>
                <div className="authorization___header">Authorization</div>
                <Input setValue={setEmail} value={stateEmail} type='text' placeholder='Enter your email' />
                <Input setValue={setPassword} value={statePassword} type='password' placeholder='Enter your password' />
                <button className="authorization___btn" onClick={() => login(stateEmail, statePassword)} >Sign In</button>
                <div className="authorization___btn2" onClick={() => setComponent(false)}>  haven't  account yet? sign up</div>
            </div>
        </div>
    )
}

export default Authorization

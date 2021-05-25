import React, { useState } from 'react';
import Input from './input/Input';



import './auth.css';
import { useActions } from '../../hooks/useActions';




const Registration: React.FC = () => {

    const {registration} = useActions();
  
    const [stateName, setName] = useState<string>('')
    const [statePassword, setPassword] = useState<string>('')
    const [stateEmail, setEmail] = useState<string>('')
    


    function Registration(): void {
        
        registration(stateName, statePassword, stateEmail)
    }
    return (

        <div className='auth'>
            <div className='authorization'>
                <div className="authorization___header">Registration</div>
                <Input setValue={setName} value={stateName} type='text' placeholder='Enter your name' />
                <Input setValue={setEmail} value={stateEmail} type='text' placeholder='Enter your email' />
                <Input setValue={setPassword} value={statePassword} type='password' placeholder='Enter your password' />
                <button className="authorization___btn" onClick={() => {Registration()}} >Sign Up</button>
                <div className="authorization___btn2"> have already  account? sign in</div>
            </div>
        </div>

    )
}

export default Registration

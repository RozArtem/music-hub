import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Authorization from '../../components/auth/Authorization'
import Registration from '../../components/auth/Registration'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import logo from '../../logo.svg'



import './auth-page.css'

const AuthorizationPage: React.FC = () => {


    const { isAuth } = useTypedSelector(state => state.currentUser)

    const [toggler, setToggler] = useState<boolean>(false)


    return (
        <div className='auth-page'>

            <div className="auth-page___logo">
                <NavLink to='/home'><img src={logo} alt="music-hub-social" /></NavLink>
            </div>
            {!toggler ?
                <Authorization setComponent={setToggler} />
                :
                <Registration setComponent={setToggler} />
            }


        </div>
    )
}

export default AuthorizationPage

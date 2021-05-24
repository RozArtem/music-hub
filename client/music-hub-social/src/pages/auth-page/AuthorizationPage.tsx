import React from 'react'
import Authorization from '../../components/auth/Authorization'
import Registration from '../../components/auth/Registration'



import './auth-page.css'

const AuthorizationPage: React.FC = () => {
    return (
        <div className='auth-page'>

            <div className="auth-page___logo">
                <img src="./logo.svg" alt="music-hub-social" />
            </div>
           <Registration />
        </div>
    )
}

export default AuthorizationPage

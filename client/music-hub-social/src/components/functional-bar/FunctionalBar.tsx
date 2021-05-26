import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypeSelector'



import './func.css'


const FunctionalBar: React.FC = () => {

    const { isAuth } = useTypedSelector(state => state.currentUser)

    return (
        <div className='functional-bar'>
            {!isAuth ?
                <div className='functional-bar___info-block'>
                    <p>Do you want to download any song? Or add any for your favorites ...</p>
                    <NavLink 
                    className='functional-bar___info-block___link'
                    to='/authorization-page'> 
                    sign in for features or create an account
                    </NavLink>
                </div>
                :
                <div className="functional-bar___container">
                    <button className='functional-bar___button'>ADD NEW</button>
                    <button className='functional-bar___button'>FAVORITES</button>
                    <button className='functional-bar___button'>CREAT ALBUM</button>
                    <button className='functional-bar___button'>SOMETHING</button>
                </div>

            }

        </div>
    )
}

export default FunctionalBar

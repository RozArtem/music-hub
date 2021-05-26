import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './navbar.css'


const Navbar: React.FC = () => {

    const history = useHistory()
    const { logout } = useActions()
    const { isAuth } = useTypedSelector(state => state.currentUser)

    function moveToSinInOrLogOut() {

        isAuth ? logout() : history.push('/authorization-page')

    }

    return (
        <div className="navbar">
            <NavLink to='/home'> <div className="navbar___logo-container">

                <img src="./logo.svg" alt="musichubsocial" />

            </div>
            </NavLink>
            <div className="navbar___navigation">
                <nav className="navbar___navigation___nav-container">
                    <ul className="nav-content">
                        {isAuth && <li><a href="#">My profile</a></li>}
                        <li> <NavLink  to='/profiles'><a >Profiles</a></NavLink></li>
                    </ul>
                </nav>

                <button className="navbar___navigation___logout"
                    onClick={() => { moveToSinInOrLogOut() }}
                > {isAuth ? 'Log Out' : 'Sing In'}</button>

            </div>
        </div>
    )
}

export default Navbar

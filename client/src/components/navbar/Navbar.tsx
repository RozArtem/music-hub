import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './navbar.css'
import logo from '../../logo.svg'


const Navbar: React.FC = () => {

    const history = useHistory()
    const { logout , getUserProfile} = useActions()
    const { isAuth, currentUser } = useTypedSelector(state => state.currentUser)
    const { isShowFucnBar } = useTypedSelector(state => state.player)
    const { ShowFucnBar, HideFucnBar} = useActions()

    function moveToSinInOrLogOut() {

        isAuth ? logout() : history.push('/authorization-page')

    }
    function moveToMyProfile() {

        getUserProfile(currentUser?.id || '')
        history.push(`/profile/${currentUser?.id}`)
    }

    return (
        <div className="navbar">
            <NavLink to='/home'> <div className="navbar___logo-container">

                <img src={logo} alt="musichubsocial" />

            </div>
            </NavLink>
            <div className="navbar___navigation">
                <nav className="navbar___navigation___nav-container">
                   
                    <ul className="nav-content">
                        {isAuth && <li onClick={() => moveToMyProfile()}><a >My profile</a></li>}
                        <li> <NavLink  to='/profiles'><a >Profiles</a></NavLink></li>
                    </ul>
                </nav>

                <button className="navbar___navigation___logout"
                    onClick={() => { moveToSinInOrLogOut() }}
                > {isAuth ? 'Log Out' : 'Sing In'}</button>
                <div className="mobile-func"

                    onClick={()=> {isShowFucnBar? HideFucnBar() : ShowFucnBar()}}
                >
                {!isShowFucnBar && '☰'}
                </div>
            </div>
        </div>
    )
}

export default Navbar

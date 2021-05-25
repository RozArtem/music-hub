import React from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import './navbar.css'


const Navbar: React.FC = () => {

    const {logout} = useActions()
    const { isAuth } = useTypedSelector(state => state.currentUser)

    return (
        <div className="navbar">
              <NavLink to='/home'> <div className="navbar___logo-container">

                   <img src="./logo.svg" alt="musichubsocial" /> 

                </div>
                </NavLink> 
                <div className="navbar___navigation">
                    <nav className="navbar___navigation___nav-container">
                        <ul className="nav-content">
                            <li><a href="#">My profile</a></li>
                            <li><a href="#">Profiles</a></li>
                        </ul>
                    </nav>
                    {!isAuth && <p>Sing In</p>}
                    <button className="navbar___navigation___logout"
                    onClick={() => {logout()}}
                    > {isAuth? 'Log Out' : <NavLink to='/authorization-page'>Sing Up</NavLink>}</button>

                </div>
            </div>
    )
}

export default Navbar

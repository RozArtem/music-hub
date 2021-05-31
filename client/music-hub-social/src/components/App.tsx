import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import './app.css'
import AuthorizationPage from '../pages/auth-page/AuthorizationPage'
import HomePage from '../pages/home/HomePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypeSelector'
import { useActions } from '../hooks/useActions'
import ProfilesPage from '../pages/user/profiles/ProfilesPage'
import UserPage from '../pages/user/user/UserPage'
import AlbumPage from '../pages/album/AlbumPage'

const App = () => {


  const { isAuth } = useTypedSelector(state => state.currentUser)
  const { auth } = useActions()

  useEffect(() => { auth()  }, [])

  return (

    <div>
      <Router>

        <Switch>
          <Route path="/home" exact={true} component={HomePage} />
          <Route path="/authorization-page" component={AuthorizationPage} />
          <Route path='/profiles' component={ProfilesPage} />
          <Route path='/profile' component={UserPage} />
          <Route path='/albums' component={AlbumPage} />

          <Redirect to="/home" />

        </Switch>


      </Router>
    </div>
  )
}

export default App


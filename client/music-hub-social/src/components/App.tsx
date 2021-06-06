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
import AddTrackPage from '../pages/add-track/AddTrackPage'
import PlayBar from './play-bar/PlayBar'

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
          <Route path='/add-track' component={AddTrackPage} />

          <Redirect to="/home" />

        </Switch>


      </Router>

      <PlayBar />
    </div>
  )
}

export default App


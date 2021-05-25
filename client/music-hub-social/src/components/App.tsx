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

const App = () => {


  const { isAuth } = useTypedSelector(state => state.currentUser)
  const {auth} = useActions()
  
  useEffect(() => {auth()}, [])
  
  return (

    <div>
      <Router>
        {isAuth ?
          <Switch>

            <Route path="/" component={HomePage} />
            <Redirect to="/" />

          </Switch>
          :
          <Switch>

            <Route path="/authorization-page" component={AuthorizationPage} />
            
          </Switch>
        }

      </Router>
    </div>
  )
}

export default App


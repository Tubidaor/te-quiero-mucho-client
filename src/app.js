import React from 'react'
import { Switch, Route } from 'react-router-dom'
import IntroPage from './pages/intro-page/intro-page'
import './app.css'
import LoginPage from './pages/login-page/login-page'
import RegPage from './pages/req-page/reg-page'
import OpeningQs from './pages/opening-qs/opening-qs'
import HomePage from './pages/home-page/home-page'
import PrivateRoute from './components/misc/private-route'
import PublicOnlyRoute from './components/misc/public-only-route'
import NotFoundPage from './pages/not-found-page/not-found-page'
import Boundary from './components/error-boundary/error-boundary'

function App() {
  return (
    <div className="App">
      <Boundary>
        <Switch>
          <Route
            exact
            path={"/"}
            component={IntroPage}
          />
          <PublicOnlyRoute
            path={"/login"}
            component={LoginPage}
          />
          <PublicOnlyRoute
            path={"/register"}
            component={RegPage}
          />
          <PrivateRoute
          path={"/openingQs"}
          component={OpeningQs}
          />
          <PrivateRoute
          path={"/home"}
          component={HomePage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </Boundary>
    </div>
  )
}

export default App

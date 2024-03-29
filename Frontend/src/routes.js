import React from 'react'
import { Router, Redirect } from "@reach/router"
import PropTypes from 'prop-types'

import Setting from './components/settings/setting'

import { GetAuth } from './utility/auth-service'
import { WithBasicLayout, WithOpenLayout } from './layouts'
import LoginPage from './containers/login-page/login'
import UserPage from './containers/user-page/user'
import DocumentTypePage from './containers/document-type-page/document-type'
import EventTypePage from './containers/event-type-page/event-type'
import EventPage from './containers/event-page/event'
import AreaPage from './containers/area-page/area' 
import DocumentPage from './containers/document-page/document'
import PopupPage from './containers/popup-page/popup'
import QueryPage from './containers/query-page/query'
import JoinSamitiPage from './containers/join-samiti/joinsamiti'
import StatePage from './containers/state-page/state'
import DistrictPage from './containers/district-page/district'
import TalukaPage from './containers/taluka-page/taluka'

const Routes = (props) =>
  <Router>
    <LoginPage {...props} path="/login"/>
    <ProtectedRoute component={HomePage} {...props} path="/" />

    <ProtectedRoute component={PopupPage} {...props} path="popups" />
    <ProtectedRoute component={PopupPage} {...props} path="popups/:id" />
    <ProtectedRoute component={DocumentPage} {...props} path="documents" />
    <ProtectedRoute component={DocumentPage} {...props} path="documents/:id" />
    <ProtectedRoute component={EventPage} {...props} path="events" />
    <ProtectedRoute component={EventPage} {...props} path="events/:id" />
    <ProtectedRoute component={QueryPage} {...props} path="queries" />
    <ProtectedRoute component={QueryPage} {...props} path="queries/:id" />

    <ProtectedRoute component={Setting} {...props} path="settings" />
    <ProtectedRoute component={UserPage} {...props} path="users" />
    <ProtectedRoute component={UserPage} {...props} path="users/:id" />
    <ProtectedRoute component={DocumentTypePage} {...props} path="/documenttypes" />
    <ProtectedRoute component={DocumentTypePage} {...props} path="/documenttypes/:id" />
    <ProtectedRoute component={EventTypePage} {...props} path="/eventtypes" />
    <ProtectedRoute component={EventTypePage} {...props} path="/eventtypes/:id" />
    <ProtectedRoute component={AreaPage} {...props} path="areas" />
    <ProtectedRoute component={AreaPage} {...props} path="areas/:id" />
    <ProtectedRoute component={JoinSamitiPage} {...props} path="joinsamitis" />
    <ProtectedRoute component={JoinSamitiPage} {...props} path="joinsamitis/:id" />

    <ProtectedRoute component={StatePage} {...props} path="states" />
    <ProtectedRoute component={StatePage} {...props} path="states/:id" />

    <ProtectedRoute component={DistrictPage} {...props} path="districts" />
    <ProtectedRoute component={DistrictPage} {...props} path="districts/:id" />

    <ProtectedRoute component={TalukaPage} {...props} path="talukas" />
    <ProtectedRoute component={TalukaPage} {...props} path="talukas/:id" />

    <NotFound default />
  </Router>


const HomePage = () =>
  <WithBasicLayout>
    <div className="home-page">
    </div>
  </WithBasicLayout>


const NotFound = ({ location }) =>
  <WithOpenLayout>
    <div className="whoops-404 text-center m-4">
      <h1 className="h1 mb-3 font-weight-normal">404</h1>
      <div>We couldn`&apos;`t find this page.</div>
      <p>{location.pathname}</p>
    </div>
  </WithOpenLayout>


const ProtectedRoute = ({ component: Component, ...props }) => {
  
  const authToken = GetAuth()
  
  return(
    authToken ? 
        <Component {...props} /> : <Redirect noThrow to='/login' />   
  )
}

export default Routes

Routes.propTypes = {
  location: PropTypes.object,
  pathname: PropTypes.string,
  component: PropTypes.func
}

NotFound.propTypes = {
  location: PropTypes.object,
  pathname: PropTypes.string,
  component: PropTypes.func
}

ProtectedRoute.propTypes = {
  component: PropTypes.func
}
import React from 'react'
import { Router, Redirect } from "@reach/router"

import Setting from './components/settings/setting'

import { GetAuth } from './utility/auth-service'
import { WithBasicLayout, WithOpenLayout } from './layouts'
import LoginPage from './containers/login-page/login'
import UserPage from './containers/user-page/user'
import ItemPage from './containers/item-page/item'
import DcoumentTypePage from './containers/document-type-page/document-type'
import AssetPage from './containers/asset-page/asset'


const Routes = (props) =>
  <Router>
    <LoginPage {...props} path="/login"/>
    <ProtectedRoute component={HomePage} {...props} path="/" />
    <ProtectedRoute component={ItemPage} {...props} path="items" />
    <ProtectedRoute component={ItemPage} {...props} path="items/:id" />
    <ProtectedRoute component={DcoumentTypePage} {...props} path="/document-types" />
    <ProtectedRoute component={DcoumentTypePage} {...props} path="/document-types/:id" />
    <ProtectedRoute component={AssetPage} {...props} path="assets" />
    <ProtectedRoute component={AssetPage} {...props} path="assets/:id" />

    <ProtectedRoute component={Setting} {...props} path="settings" />
    <ProtectedRoute component={UserPage} {...props} path="users" />
    <ProtectedRoute component={UserPage} {...props} path="users/:id" />

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
      <div>We couldn't find this page. </div>
      <p>{location.pathname}</p>
    </div>
  </WithOpenLayout>


  const ProtectedRoute = ({ component: Component, ...props }) => {
  
  const authToken =  GetAuth()

  return(
    authToken !== "" ? 
        <Component {...props} /> : <Redirect noThrow to='/login' />   
  )
}

export default Routes
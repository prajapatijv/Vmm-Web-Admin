import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './nav-bar'
import Sidebar from './side-bar'
import StatusBar from '../containers/status-bar/statusbar'

export const WithBasicLayout = ({children}) => 
<React.Fragment>
  <StatusBar />
  <div className="wrapper">
    <Sidebar />
    <div className="container-fluid px-0">
      <Navbar />
      {children}
    </div>
  </div>
</React.Fragment>


export const WithOpenLayout = ({children}) => 
<React.Fragment>
  <StatusBar />
  <div className="wrapper">
    <div className="container-fluid px-0">
      {children}
    </div>
  </div>
</React.Fragment>

WithBasicLayout.propTypes = {
  children:PropTypes.func
}

WithOpenLayout.propTypes = {
  children:PropTypes.func
}
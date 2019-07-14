import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginPage from '../../components/login/login-page'
import * as actions from './actions'

const Login = (props) => {
    
    const mapActions = bindActionCreators(actions, useDispatch())
    const mapState  = (state) => { return { auth: state.auth }}        
    const { auth  } = useSelector(mapState)

    return(
        <LoginPage {...props} auth={auth}
            onLogin={mapActions.login}
        />
    )
} 

export default Login
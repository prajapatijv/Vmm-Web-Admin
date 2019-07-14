import React from 'react'

import LoginForm from './login-form'
import StatusBar from '../../containers/status-bar/statusbar'

const LoginPage = (props) =>
<div className="login-container text-center bg-light">
    <StatusBar />        
    <div className="py-5">
        <LoginForm {...props} />
    </div>
</div>


export default LoginPage
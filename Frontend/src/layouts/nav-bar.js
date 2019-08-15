import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { LogOut } from 'react-feather'
import { GetUserName } from '../utility/auth-service'
import * as actions from '../containers/login-page/actions'

const Navbar = () => {

    const mapActions = bindActionCreators(actions, useDispatch())
    const mapState  = (state) => { return { auth: state.auth }}        
    const { auth  } = useSelector(mapState)
    const userName =  GetUserName()
    const displayName = userName && userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()

    return(
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap">
            <span className="navbar-brand text-muted">VMM Admin Portal // {displayName}</span>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <button  className="btn btn-dark btn-link"
                        onClick={() => mapActions.logout(auth)}>
                        <LogOut />
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

/*<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />*/
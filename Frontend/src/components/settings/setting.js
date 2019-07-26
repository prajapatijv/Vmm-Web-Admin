import React from 'react'
import { Users }  from 'react-feather'
import NavLink from '../shared/navlink'

import { WithBasicLayout } from '../../layouts'

const Setting = () =>
    <WithBasicLayout>
        <div className="px-5">
            <h1>Settings</h1>
            <div className="row" >
                <div className="col-md-4">
                    <div class="list-group">
                        <NavItem path="/users" displayName="Users" icon={<Users/>} />                        
                    </div>
                </div>
            </div>
        </div>
    </WithBasicLayout>

const NavItem = ({path, displayName, icon}) =>                 
    <li className="nav-item">
        <NavLink to={path} className="nav-link" activeClassName="active">
            {icon}
            {displayName}
        </NavLink>
    </li>

export default Setting
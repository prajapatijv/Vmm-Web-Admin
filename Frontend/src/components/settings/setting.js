import React from 'react'
import { Users, Flag, Book, Compass } from 'react-feather'
import NavLink from '../shared/navlink'

import { WithBasicLayout } from '../../layouts'

import PropTypes from 'prop-types'

const Setting = () =>
    <WithBasicLayout>
        <div className="px-4 py-4">
            <h1 className="text-center">Settings</h1>
            <div className="row" >
                <div className="col-md-4 py-2">
                    <div className="card">
                        <NavItem path="/users" displayName="Users" icon={<Users />} />
                    </div>
                </div>
                <div className="col-md-4 py-2">
                    <div className="card">
                        <NavItem path="/documenttypes" displayName="Document Types" icon={<Book />} />
                    </div>
                </div>
                <div className="col-md-4 py-2">
                    <div className="card">
                        <NavItem path="/eventtypes" displayName="Event Types" icon={<Flag />} />
                    </div>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-4 py-3">
                    <div className="card">
                        <NavItem path="/areas" displayName="Areas" icon={<Compass />} />
                    </div>
                </div>
            </div>
        </div>
    </WithBasicLayout>

const NavItem = ({ path, displayName, icon }) =>
    <div className="card" >
        <div className="card-body">
            <h5 className="card-title">{icon} {displayName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Manage {displayName}</h6>
            <hr></hr>
            <NavLink to={path} className="btn btn-block btn-outline-primary" activeClassName="active">
                {displayName}
            </NavLink>
        </div>
    </div>


export default Setting

NavItem.propTypes = {
    path: PropTypes.string,
    displayName: PropTypes.string,
    icon: PropTypes.func
}
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronLeft, ChevronRight, BarChart, PieChart, Settings, BookOpen, Calendar, Gitlab, MessageSquare , HelpCircle }  from 'react-feather'
import classNames from 'classnames'

import NavLink from '../components/shared/navlink'

import './side-bar.scss'

const Sidebar = () => {
    const [toggle, setToggle] = useState(1)

    var cls = classNames({
        'bg-light': true,
        'side-bar': true,
        'collaspe': toggle === 1
    })

    return (
    <nav id="sidebar" className={cls}>
        <div className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <Gitlab className="text-primary"/>
            </a>
            {toggle === 0 && <span className="toggle" onClick={() => setToggle(1)}><ChevronLeft className="text-muted"/></span>}
            {toggle === 1 && <span className="toggle" onClick={() => setToggle(0)}><ChevronRight className="text-muted"/></span>}
        </div>

        <div className="sidebar-sticky pt-3">
            <ul className="nav nav-pills flex-column">
                <NavItem path="/popups" displayName="Popup" icon={<MessageSquare/>} />
                <NavItem path="/documents" displayName="Documents" icon={<BookOpen/>} />
                <NavItem path="/events" displayName="Events" icon={<Calendar/>} />
                <NavItem path="/queries" displayName="Queries" icon={<HelpCircle/>} />
            </ul>

            <hr/>
            <ul className="nav flex-column nav-pills mb-2">
                <NavItem path="/report-1" displayName="Report 1" icon={<BarChart/>} />
                <NavItem path="/report-2" displayName="Report 2" icon={<PieChart/>} />
            </ul>

            <hr/>
            <ul className="nav flex-column nav-pills mb-2">
                <NavItem path="/settings" displayName="Settings" icon={<Settings/>} />
            </ul>
        </div>
    </nav>
    )
}

const NavItem = ({path, displayName, icon}) =>                 
    <li className="nav-item">
        <NavLink to={path} className="nav-link" activeClassName="active">
            {icon}
            {displayName}
        </NavLink>
    </li>

export default Sidebar

NavItem.propTypes = {
    path: PropTypes.string,
    displayName: PropTypes.string,
    icon: PropTypes.any
}
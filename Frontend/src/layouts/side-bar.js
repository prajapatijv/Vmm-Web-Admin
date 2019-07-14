import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, List, Users , BarChart, PieChart, Settings, Book, Video }  from 'react-feather'
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
                BS
            </a>
            {toggle === 0 && <span className="toggle" onClick={() => setToggle(1)}><ChevronLeft/></span>}
            {toggle === 1 && <span className="toggle" onClick={() => setToggle(0)}><ChevronRight/></span>}
        </div>

        <div className="sidebar-sticky pt-3">
            <ul className="nav nav-pills flex-column">
                <NavItem path="/categories" displayName="Categories" icon={<Book/>} />
                <NavItem path="/users" displayName="Users" icon={<Users/>} />
                <NavItem path="/items" displayName="Items" icon={<List/>} />
                <NavItem path="/assets" displayName="Assets" icon={<Video/>} />
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
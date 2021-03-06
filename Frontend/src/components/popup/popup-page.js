import React from 'react'

import PopupForm from './popup-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const PopupPage = (props) => {
    return (
        <PageWrapper searchLabel="popup" {...props}>
            <PopupLines {...props} />
            <PopupForm {...props} />
        </PageWrapper>
    )
}

const PopupLines = ({ popups }) =>
    popups.map((popup) =>
        <NavLink key={popup.id}
            to={`/popups/${popup.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{popup.title} 
        </NavLink>
    )

export default PopupPage
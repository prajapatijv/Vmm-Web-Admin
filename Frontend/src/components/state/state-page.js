import React from 'react'

import StateForm from './state-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const StatePage = (props) => {
    return (
        <PageWrapper searchLabel="states" {...props}>
            <StateLines {...props} />
            <StateForm {...props} />
        </PageWrapper>
    )
}

const StateLines = ({ states }) =>
    states.map((state) =>
        <NavLink key={state.id}
            to={`/states/${state.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{state.stateName} 
        </NavLink>
    )

export default StatePage
import React from 'react'

import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'
import JoinSamitiForm from './joinsamiti-form'

const JoinSamitiPage = (props) => {
    return (
        <PageWrapper searchLabel="join samiti" {...props}>
            <JoinSamitiLines {...props} />
            <JoinSamitiForm {...props} />
        </PageWrapper>
    )
}

const JoinSamitiLines = ({ joinsamitis }) =>
    joinsamitis.map((joinsamiti) =>
        <NavLink key={joinsamiti.id}
            to={`/joinsamiti/${joinsamiti.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{joinsamiti.personName} 
        </NavLink>
    )

export default JoinSamitiPage
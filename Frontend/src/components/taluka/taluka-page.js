import React from 'react'

import TalukaForm from './taluka-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const TalukaPage = (props) => {
    return (
        <PageWrapper searchLabel="taluka" {...props}>
            <TalukaLines {...props} />
            <TalukaForm {...props} />
        </PageWrapper>
    )
}

const TalukaLines = ({ talukas }) =>
    talukas.map((taluka) =>
        <NavLink key={taluka.id}
            to={`/talukas/${taluka.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{taluka.talukaName} 
        </NavLink>
    )

export default TalukaPage
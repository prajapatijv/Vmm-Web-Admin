import React from 'react'

import QueryForm from './query-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const QueryPage = (props) => {
    return (
        <PageWrapper searchLabel="queries" {...props}>
            <QueryLines {...props} />
            <QueryForm {...props} />
        </PageWrapper>
    )
}

const QueryLines = ({ queries }) => {
return(
    queries.map((query) =>
        <NavLink key={query.id}
            to={`/queries/${query.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{query.name} 
        </NavLink>
    )
)
}
export default QueryPage
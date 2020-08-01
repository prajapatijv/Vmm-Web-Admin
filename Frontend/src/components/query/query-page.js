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

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const QueryLines = ({ queries }) => {
    return (
        queries.map((query) =>
            <NavLink key={query.id}
                to={`/queries/${query.id}`}
                activeClassName="active"
                className="app-list-item list-group-item-action"
            >
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="mb-1">{query.name}</div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p className="mb-1"><small>{new Date(query.createdDate).toLocaleDateString("gu-IN", options)}</small></p>
                    {query.status
                        ? <span className="badge badge-success badge-pill">Replied</span>
                        : <span className="badge badge-primary badge-pill">Pending</span>
                    }
                </li>
            </NavLink>

        )
    )
}
export default QueryPage
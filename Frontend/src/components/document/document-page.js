import React from 'react'

import DocumentForm from './document-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'
import Status from '../shared/entitystatus'

const DocumentPage = (props) => {
    return (
        <PageWrapper searchLabel="documents" {...props}>
            <DocumentLines {...props} />
            <DocumentForm {...props} />
        </PageWrapper>
    )
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const DocumentLines = ({ documents }) => {
return(
    documents.map((document) =>
        <NavLink key={document.id}
            to={`/documents/${document.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >
            <li className="list-group-item-action d-flex justify-content-between align-items-center">
                <div className="mb-1">{document.title}</div>
                <Status status={document.enabled}></Status>
            </li>
            <li className="list-group-item-action d-flex justify-content-between align-items-center">
                <div className="mb-1">
                    <small>
                        {new Date(document.publishDate).toLocaleDateString("gu-IN", options)}
                        <span> થી </span> 
                        {new Date(document.expiryDate).toLocaleDateString("gu-IN", options)}
                    </small>
                </div>
            </li>

        </NavLink>
    )
)
}
export default DocumentPage
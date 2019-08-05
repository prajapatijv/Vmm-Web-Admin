import React from 'react'

import DocumentForm from './document-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const DocumentPage = (props) => {
    return (
        <PageWrapper searchLabel="documents" {...props}>
            <DocumentLines {...props} />
            <DocumentForm {...props} />
        </PageWrapper>
    )
}

const DocumentLines = ({ documents }) => {
return(
    documents.documents.map((document) =>
        <NavLink key={document.id}
            to={`/documents/${document.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{document.title} 
        </NavLink>
    )
)
}
export default DocumentPage
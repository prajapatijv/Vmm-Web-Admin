import React from 'react'

import DocumentTypeForm from './document-type-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const DocumentTypePage = (props) => {
    return (
        <PageWrapper searchLabel="document types" {...props}>
            <DocumentTypeLines {...props} />
            <DocumentTypeForm {...props} />
        </PageWrapper>
    )
}

const DocumentTypeLines = ({ documenttypes }) =>
    documenttypes.map((documenttype) =>
        <NavLink key={documenttype.id}
            to={`/documenttypes/${documenttype.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{documenttype.description} 
        </NavLink>
    )

export default DocumentTypePage
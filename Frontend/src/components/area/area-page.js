import React from 'react'

import AreaForm from './area-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const AreaPage = (props) => {
    return (
        <PageWrapper searchLabel="areas" {...props}>
            <AreaLines {...props} />
            <AreaForm {...props} />
        </PageWrapper>
    )
}

const AreaLines = ({ areas }) =>
    areas.map((area) =>
        <NavLink key={area.id}
            to={`/areas/${area.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{area.areaName} 
        </NavLink>
    )

export default AreaPage
import React from 'react'

import DistrictForm from './district-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const DistrictPage = (props) => {
    return (
        <PageWrapper searchLabel="districts" {...props}>
            <DistrictLines {...props} />
            <DistrictForm {...props} />
        </PageWrapper>
    )
}

const DistrictLines = ({ districts }) =>
    districts.map((district) =>
        <NavLink key={district.id}
            to={`/districts/${district.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{district.districtName} 
        </NavLink>
    )

export default DistrictPage
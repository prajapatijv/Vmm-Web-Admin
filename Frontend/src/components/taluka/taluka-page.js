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

const TalukaLines = ({ talukas, districts, states }) =>
    talukas.map((taluka) => {
        const dist = districts.filter(e => e.id == taluka.districtId)[0]
        const state = states.filter(e => e.id == taluka.stateId)[0]
        
        return(
            <NavLink key={taluka.id}
                to={`/talukas/${taluka.id}`}
                activeClassName="active"
                className="app-list-item list-group-item-action"
            >{taluka.talukaName}   ( {dist.districtName}, {state.stateName} ) 
            </NavLink>
            )
        }
    )

export default TalukaPage
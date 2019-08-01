import React from 'react'

import EventTypeForm from './event-type-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const EventTypePage = (props) => {
    return (
        <PageWrapper searchLabel="event types" {...props}>
            <EventTypeLines {...props} />
            <EventTypeForm {...props} />
        </PageWrapper>
    )
}

const EventTypeLines = ({ eventtypes }) =>
    eventtypes.map((eventtype) =>
        <NavLink key={eventtype.id}
            to={`/eventtypes/${eventtype.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{eventtype.description} 
        </NavLink>
    )

export default EventTypePage
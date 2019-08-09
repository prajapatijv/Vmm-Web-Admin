import React from 'react'

import EventForm from './event-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'

const EventPage = (props) => {
    return (
        <PageWrapper searchLabel="events" {...props}>
            <EventLines {...props} />
            <EventForm {...props} />
        </PageWrapper>
    )
}

const EventLines = ({ events }) => {
return(
    events.map((event) =>
        <NavLink key={event.id}
            to={`/events/${event.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >{event.eventName} ({event.eventType})
        </NavLink>
    )
)
}
export default EventPage
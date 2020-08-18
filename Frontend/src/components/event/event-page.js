import React from 'react'

import EventForm from './event-form'
import NavLink from '../shared/navlink'
import PageWrapper from '../shared/page-wrapper'
import Status from '../shared/entitystatus'

const EventPage = (props) => {
    return (
        <PageWrapper searchLabel="events" {...props}>
            <EventLines {...props} />
            <EventForm {...props} />
        </PageWrapper>
    )
}

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const EventLines = ({ events }) => {
return(
    events.map((event) =>
        <NavLink key={event.id}
            to={`/events/${event.id}`}
            activeClassName="active"
            className="app-list-item list-group-item-action"
        >
            <li className="list-group-item-action d-flex justify-content-between align-items-center">
                <div className="mb-1">{event.eventName}</div>
                <Status status={event.active}></Status>
            </li>
            <li className="list-group-item-action d-flex justify-content-between align-items-center">
                <div className="mb-1">
                    <small>
                        {new Date(event.startDate).toLocaleDateString("gu-IN", options)}
                        <span> થી </span> 
                        {new Date(event.endDate).toLocaleDateString("gu-IN", options)}
                    </small>
                </div>
            </li>
        </NavLink>
    )
)
}
export default EventPage


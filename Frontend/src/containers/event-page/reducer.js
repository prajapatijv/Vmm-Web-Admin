import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const events = (state = initialState, action) => {
    var eventState = withPageReducer(keys.Event, state, action, defaultEvent, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_EVENTS_SUCCEED`: {
            return { ...eventState, "eventtypes": action.payload.data.eventtypes }
        }

        default:
            return eventState
    }
}

const defaultEvent = {
    id: 0, 
    eventTypeId: 0, 
    eventName: "", 
    startDate: "", 
    endDate: "", 
    time: "", 
    address1: "", 
    address2: "", 
    city: "", 
    contactNumber: "", 
    contactEmail: ""
}

const initialState = {
    events: [],
    eventtypes: []
}

const byName = criteria => event => {
    if (criteria === undefined) {
        return true
    }
    else {
        return event.eventName.toLowerCase().match(criteria.toLowerCase())
    }
}

export default events
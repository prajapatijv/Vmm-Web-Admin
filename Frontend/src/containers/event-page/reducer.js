import keys from '../container-types'
import withPageReducer from '../../utility/with-page-reducer'

const events = (state = initialState, action) => {
    var eventState = withPageReducer(keys.Event, state, action, defaultEvent, (criteria) => byName(criteria))

    switch (action.type) {
        case `FETCH_EVENTS_SUCCEED`: {
            return { ...eventState, 
                "eventtypes": action.payload.data.eventtypes, 
                "areas": action.payload.data.areas,
                "states": action.payload.data.states,
                "districts": action.payload.data.districts,
                "talukas": action.payload.data.talukas
             }
        }

        default:
            return eventState
    }
}

const defaultEvent = {
    id: 0, 
    eventTypeId: 0, 
    eventName: "", 
    startDate: new Date(), 
    endDate: new Date(), 
    time: "", 
    address1: "", 
    address2: "", 
    city: "", 
    contactNumber: "", 
    contactEmail: "",
    areasId: 0,
    stateId:0,
    districtId:0,
    talukaId:0
}

const initialState = {
    events: [],
    eventtypes: [],
    areas: [],
    states: [],
    districts: [],
    talukas: []
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
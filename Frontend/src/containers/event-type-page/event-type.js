import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import EventTypePage from '../../components/event-type/event-type-page'

const EventTypeContainer = (props) => WithPageContainer(EventTypePage,  props, keys.EventType)

export default EventTypeContainer
import WithPageContainer from '../../utility/with-page-container'
import keys from '../container-types'
import EventPage from '../../components/event/event-page'

const EventContainer = (props) => WithPageContainer(EventPage,  props, keys.Event)

export default EventContainer
export const Env = {
    Production: 'production',
    Development: 'development'
}

const _contextMappings = {
    'user' : { 'apiContext': 'users', 'actionContext': { 'singular': 'user', 'SINGULAR': 'USER', 'plural': 'users', 'PLURAL': 'USERS' } },
    'item' : { 'apiContext': 'items', 'actionContext': { 'singular': 'item', 'SINGULAR': 'ITEM', 'plural': 'items', 'PLURAL': 'ITEMS' } },
    'documenttype' : { 'apiContext': 'documenttypes', 'actionContext': { 'singular': 'documenttype', 'SINGULAR': 'DOCUMENTTYPE', 'plural': 'documenttypes', 'PLURAL': 'DOCUMENTTYPES' } },
    'event' : { 'apiContext': 'events', 'actionContext': { 'singular': 'event', 'SINGULAR': 'EVENT', 'plural': 'events', 'PLURAL': 'EVENTS' } },
    'eventtype' : { 'apiContext': 'eventtypes', 'actionContext': { 'singular': 'eventtype', 'SINGULAR': 'EVENTTYPE', 'plural': 'eventtypes', 'PLURAL': 'EVENTTYPES' } },
    'area' : { 'apiContext': 'areas', 'actionContext': { 'singular': 'area', 'SINGULAR': 'AREA', 'plural': 'areas', 'PLURAL': 'AREAS' } },    
    'document' : { 'apiContext': 'documents', 'actionContext': { 'singular': 'document', 'SINGULAR': 'DOCUMENT', 'plural': 'documents', 'PLURAL': 'DOCUMENTS' } },    
    'popup' : { 'apiContext': 'popups', 'actionContext': { 'singular': 'popup', 'SINGULAR': 'POPUP', 'plural': 'popups', 'PLURAL': 'POPUPS' } },    
}

export const Config = {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL,
    mappings : _contextMappings
}
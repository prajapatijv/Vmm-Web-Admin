export const Env = {
    Production: 'production',
    Development: 'development'
}

const _contextMappings = {
    'user' : { 'apiContext': 'users', 'actionContext': { 'singular': 'user', 'SINGULAR': 'USER', 'plural': 'users', 'PLURAL': 'USERS', 'allowDownload':0 } },
    'item' : { 'apiContext': 'items', 'actionContext': { 'singular': 'item', 'SINGULAR': 'ITEM', 'plural': 'items', 'PLURAL': 'ITEMS','allowDownload':1 } },
    'documenttype' : { 'apiContext': 'documenttypes', 'actionContext': { 'singular': 'documenttype', 'SINGULAR': 'DOCUMENTTYPE', 'plural': 'documenttypes', 'PLURAL': 'DOCUMENTTYPES','allowDownload':0 } },
    'event' : { 'apiContext': 'events', 'actionContext': { 'singular': 'event', 'SINGULAR': 'EVENT', 'plural': 'events', 'PLURAL': 'EVENTS','allowDownload':1 } },
    'eventtype' : { 'apiContext': 'eventtypes', 'actionContext': { 'singular': 'eventtype', 'SINGULAR': 'EVENTTYPE', 'plural': 'eventtypes', 'PLURAL': 'EVENTTYPES', 'allowDownload':0 } },
    'area' : { 'apiContext': 'areas', 'actionContext': { 'singular': 'area', 'SINGULAR': 'AREA', 'plural': 'areas', 'PLURAL': 'AREAS', 'allowDownload':1 } },    
    'document' : { 'apiContext': 'documents', 'actionContext': { 'singular': 'document', 'SINGULAR': 'DOCUMENT', 'plural': 'documents', 'PLURAL': 'DOCUMENTS', 'allowDownload':1 } },    
    'popup' : { 'apiContext': 'popups', 'actionContext': { 'singular': 'popup', 'SINGULAR': 'POPUP', 'plural': 'popups', 'PLURAL': 'POPUPS' , 'allowAdd':0, 'allowDelete':0 , 'allowDownload':0} },    
    'query' : { 'apiContext': 'queries', 'actionContext': { 'singular': 'query', 'SINGULAR': 'QUERY', 'plural': 'queries', 'PLURAL': 'QUERIES', 'allowDownload':1 } },    
    'joinsamiti' : { 'apiContext': 'joinsamitis', 'actionContext': { 'singular': 'joinsamiti', 'SINGULAR': 'JOINSAMITI', 'plural': 'joinsamitis', 'PLURAL': 'JOINSAMITIS', 'allowDownload':1 } },    
    'state' : { 'apiContext': 'states', 'actionContext': { 'singular': 'state', 'SINGULAR': 'STATE', 'plural': 'states', 'PLURAL': 'STATES', 'allowDownload':1 } },    
    'district' : { 'apiContext': 'districts', 'actionContext': { 'singular': 'district', 'SINGULAR': 'DISTRICT', 'plural': 'districts', 'PLURAL': 'DISTRICTS', 'allowDownload':1 } },    
    'taluka' : { 'apiContext': 'talukas', 'actionContext': { 'singular': 'taluka', 'SINGULAR': 'TALUKA', 'plural': 'talukas', 'PLURAL': 'TALUKAS', 'allowDownload':1 } },    
}

export const Config = {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL,
    mappings : _contextMappings
}
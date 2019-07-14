export const Env = {
    Production: 'production',
    Development: 'development'
}

const _contextMappings = {
    'user' : { 'apiContext': 'users', 'actionContext': { 'singular': 'user', 'SINGULAR': 'USER', 'plural': 'users', 'PLURAL': 'USERS' } },
    'item' : { 'apiContext': 'items', 'actionContext': { 'singular': 'item', 'SINGULAR': 'ITEM', 'plural': 'items', 'PLURAL': 'ITEMS' } },
    'category' : { 'apiContext': 'categories', 'actionContext': { 'singular': 'category', 'SINGULAR': 'CATEGORY', 'plural': 'categories', 'PLURAL': 'CATEGORIES' } },
    'asset' : { 'apiContext': 'assets', 'actionContext': { 'singular': 'asset', 'SINGULAR': 'ASSET', 'plural': 'assets', 'PLURAL': 'ASSETS' } },
}

export const Config = {
    ENV: process.env.NODE_ENV,
    API_URL: process.env.REACT_APP_API_URL,
    mappings : _contextMappings
}
import React from 'react'
import { createHistory, Link, LocationProvider, Router } from '@reach/router'
import createHashSource from 'hash-source'

import Routes from './routes'


let source = createHashSource()
let history = createHistory(source)

const App = (props) => 
<LocationProvider history={history}>
    <Routes {...props} />
</LocationProvider>

export default App
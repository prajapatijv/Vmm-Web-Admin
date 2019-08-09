import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './search-bar'
import { Spinner } from './spinner'

const PageWrapper = (props) => 
    <div className="app-page item-page">
        <div className="row no-gutters  px-0" >
            <div className="col-md-4 app-list py-3">
                <LinesContainer {...props}>
                    {props.children[0]}
                </LinesContainer>
            </div>
            <div className="col-md-8 app-form bg-light">
                <div className="col-md-10 py-3">
                    {props.children[1]}
                </div>
            </div>
        </div>
    </div>


const LinesContainer = (props) =>
    <React.Fragment>
        <SearchBar {...props} placeholder={props.fetching ? `Fetching ${props.searchLabel}` : `Search ${props.searchLabel}` }/>
        <Spinner show={props.fetching}/> 
        <ul className="list-group list-group-flush">
             {!props.fetching && props.children}
        </ul>
    </React.Fragment>

export default PageWrapper

PageWrapper.propTypes = {
    children: PropTypes.object
}

LinesContainer.propTypes = {
    fetching: PropTypes.bool,
    searchLabel: PropTypes.string,
    children: PropTypes.object
}
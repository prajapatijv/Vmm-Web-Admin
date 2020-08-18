import React from 'react'
import PropTypes from 'prop-types'

const Status = ({status}) => {
    switch (status) {
        case 0:
            return (<span className="badge badge-warning">InActive</span>)
        case 1:
            return (<span className="badge badge-success">Active</span>)
        case 2:
            return (<span className="badge badge-secondary">Expired</span>)
        default:
            return (<span className="badge badge-info">{status}</span>)
    }
} 

Status.propTypes  = {
    status: PropTypes.number,
}

export default Status
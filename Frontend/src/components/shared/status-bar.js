import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Info as InfoIcon , AlertCircle }  from 'react-feather'

import './status-bar.scss'

const Statusbar = ({ status, clearErrors, clearInfos }) => {

    const hasErrors = (status.errors && status.errors.length > 0)
    const hasInfos = (status.infos && status.infos.length > 0)

    useEffect(() => {
        if (hasInfos) {
            var timer = setTimeout(() => {clearInfos()}, 2000)
        }

        return() => {
            if (hasInfos) clearTimeout(timer)
        }
    })

    return (
        <React.Fragment>
            <Error hasErrors={hasErrors} status={status} clearErrors={clearErrors} />
            <Info hasInfos={hasInfos} status={status} clearInfos={clearInfos} />
        </React.Fragment>
    )
}

export default Statusbar

const Error = ({hasErrors,  status, clearErrors}) =>
    hasErrors && 
    <div className="alert alert-dismissible fade show alert-secondary app-alert shadow " role="alert">
        <AlertCircle />
        <strong className="alert-heading">
            Error: 
            {status.errors.join(" ")}
        </strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
            onClick={() => clearErrors()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    

const Info = ({hasInfos, status, clearInfos}) =>
    hasInfos &&
    <div className="app-toast-info alert alert-dismissible fade show bg-dark app-alert" role="alert">
        <InfoIcon />
        <strong className="alert-heading text-light">
            {status.infos.join(" ")}
        </strong>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
            onClick={() => clearInfos()}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

Error.propTypes = {
    hasErrors: PropTypes.bool,  
    status: PropTypes.object,
    clearErrors: PropTypes.func
}

Info.propTypes = {
    hasInfos: PropTypes.bool, 
    status: PropTypes.object, 
    clearInfos: PropTypes.func
}

Statusbar.propTypes = {
    status: PropTypes.object,
    clearErrors: PropTypes.func,
    clearInfos: PropTypes.func,
    hasErrors: PropTypes.bool
}
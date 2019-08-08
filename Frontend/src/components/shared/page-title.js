import React from 'react'
import PropTypes from 'prop-types'
import { PlusSquare, Edit, X } from 'react-feather'

const PageTitle = ({ adding, title, onClose }) =>
    <React.Fragment>
        <div className="page-title">
            <h4>
                {adding ? <PlusSquare /> : <Edit />} {title}
            </h4>
        </div>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
            onClick={() => onClose()}>
            <span aria-hidden="true">
                <X />
            </span>
        </button>
    </React.Fragment>

export default PageTitle

PageTitle.propTypes = {
    adding: PropTypes.func,
    title: PropTypes.string,
    onClose: PropTypes.string
}
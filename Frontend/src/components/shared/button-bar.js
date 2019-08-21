import React from 'react'
import PropTypes from 'prop-types'

const ButtonBar = ({ showDelete, onDelete, saving, deleting, dirty, isValid, allowDelete }) =>
    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
        <DeleteButton showDelete={showDelete} onDelete={onDelete} deleting={deleting} allowDelete={allowDelete} />
        <div className="btn-group  float-right" role="group" >
            <button type="reset" className="btn app-button" disabled={!dirty}>Reset</button>
            <button type="submit" className="btn app-button" disabled={!isValid || saving || !dirty}>
                {saving &&
                    <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Saving...</span>
                    </div>}
                Save
        </button>
        </div>
    </div>


const DeleteButton = ({ showDelete, onDelete, deleting, allowDelete }) =>
    allowDelete ?
    <div className="btn-group" role="group" aria-label="Delete" >
        {showDelete ?
            <button type="button" className="btn app-button"
                disabled={deleting}
                onClick={(id) => onDelete(id)}>
                {deleting &&
                    <div className="spinner-border text-secondary" role="status">
                        <span className="sr-only">Deleting...</span>
                    </div>}
                Delete
        </button>
            : <div />
        }
    </div>:
    <div className="btn-group" role="group" aria-label="Delete" ></div>


export default ButtonBar

ButtonBar.propTypes = {
    showDelete: PropTypes.bool,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool,
    dirty: PropTypes.bool,
    isValid: PropTypes.bool,
    path: PropTypes.string,
    allowDelete: PropTypes.bool
}

DeleteButton.propTypes = {
    showDelete: PropTypes.bool,
    onDelete: PropTypes.func,
    deleting: PropTypes.bool,
    allowDelete: PropTypes.bool
}
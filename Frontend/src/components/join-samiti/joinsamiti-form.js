import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'
import { CheckBox } from '../shared/check-box'
import './joinsamiti-form.scss'

const JoinSamitiForm = ({ joinsamiti, samititypes, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...joinsamiti }
    const samiti = samititypes && samititypes.find(_ => _.id == joinsamiti.samitiTypeId);

    const schema = Yup.object().shape({
        id:Yup.number(),
        personName: Yup.string().min(2).max(50).required(),
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        joinsamiti ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Join Samiti" fetching={props.fetching} onClose={onClose} adding={joinsamiti.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-2">
                            <div className="card full-width-card">
                                <div className="card-body">
                                    <h5 className="card-title">{joinsamiti.personName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{joinsamiti.contactNumber} | {joinsamiti.emailId} </h6>
                                    <h6 className="card-subtitle mb-2 text-muted">{joinsamiti.village}, {joinsamiti.district} </h6>
                                    <hr/>
                                    <h4 className="card-title text-muted">Interested In</h4>
                                    <h5 className="card-title">{samiti.samitiName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{samiti.description} </h6>
                                </div>
                            </div>
                            
                            </div> 
                            <div className="form-row mb-3">
                                <Field type="checkbox" name="contacted" component={CheckBox} label="Replied" floatinglabel={true} />
                            </div>

                            <ButtonBar
                                showDelete={joinsamiti.id !== 0}
                                onDelete={() => onDeleteEntity(joinsamiti.id)}
                                saving={saving}
                                deleting={deleting}
                                dirty={props.dirty}
                                isValid={props.isValid}
                                allowDelete={allowDelete}
                            />
                        </form>
                    </React.Fragment>
                )}
            /> : null
    )
}

export default JoinSamitiForm

JoinSamitiForm.propTypes = {
    joinsamiti: PropTypes.object,
    samititypes: PropTypes.array,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    fetching: PropTypes.bool,
    deleting: PropTypes.bool,
    dirty: PropTypes.bool,
    isValid: PropTypes.bool,
    allowDelete: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func
}
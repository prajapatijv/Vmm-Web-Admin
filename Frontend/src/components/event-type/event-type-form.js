import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { ColorPicker } from '../shared/color-picker'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const EventTypeForm = ({ eventtype, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...eventtype }

    const schema = Yup.object().shape({
        id:Yup.number(),
        description: Yup.string().min(2).max(50).required(),
        colorCode: Yup.string().min(2).max(50).required()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        eventtype ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Event Type" fetching={props.fetching} onClose={onClose} adding={eventtype.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="description" component={InputBox} placeholder="Description" floatinglabel={true} />
                            </div>

                            <div className="form-row mb-3">
                                <Field type="label" name="colorCode" component={ColorPicker} label="Pick Event Theme Color" />
                            </div>

                            <ButtonBar
                                showDelete={eventtype.id !== 0}
                                onDelete={() => onDeleteEntity(eventtype.id)}
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

export default EventTypeForm

EventTypeForm.propTypes = {
    eventtype: PropTypes.object,
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
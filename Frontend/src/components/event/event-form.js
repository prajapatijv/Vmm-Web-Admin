import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { SelectBox } from '../shared/select-box'
import { TextAreaBox } from '../shared/textarea-box'
import { CheckBox } from '../shared/check-box'
import { DatePickerBox } from '../shared/date-picker'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const EventForm = ({ event, eventtypes, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...event }
    const _eventTypes = eventtypes || []

    const schema = Yup.object().shape({
        id: Yup.number(),
        eventTypeId: Yup.number().required(),
        eventName: Yup.string().min(2).max(50).required(),
        description: Yup.string().min(2).max(200).required(),
        startDate: Yup.string().required(),
        endDate: Yup.date().required(),
        time:Yup.string().notRequired(),
        address1:Yup.string().notRequired(),
        address2:Yup.string().notRequired(),
        city:Yup.string().required(),
        contactNumber:Yup.string().notRequired(),
        contactEmail:Yup.string().notRequired(),
        active: Yup.string().notRequired()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        event ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Event" fetching={props.fetching} onClose={onClose} adding={event.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="eventTypeId" component={SelectBox} placeholder="Event Type" options={_eventTypes} floatinglabel={true} />
                            </div>

                            <div className="form-row mb-3">
                                <Field type="text" name="eventName" component={InputBox} placeholder="Evant Name" floatinglabel={true} />
                            </div>
                            
                            <div className="form-row mb-3">
                                <Field type="text" name="description" component={TextAreaBox} placeholder="Description" floatinglabel={true} />
                            </div>

                            <div className="form-row mb-3">
                                <div className="col-md-4 mb-3">
                                    <Field type="text" name="startDate" component={DatePickerBox} placeholder="Start Date" floatinglabel={true} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <Field type="text" name="endDate" component={DatePickerBox} placeholder="End Date" floatinglabel={true} />
                                </div>
                            </div>

                            <div className="form-row mb-3">
                                <Field type="datetime" name="time" component={InputBox} placeholder="Event Time notes" floatinglabel={true} />
                            </div>

                            <div className="form-row mb-3">
                                <Field type="text" name="address1" component={InputBox} placeholder="Address" floatinglabel={true} />
                                <Field type="text" name="address2" component={InputBox} placeholder="Address" floatinglabel={true} />
                                <Field type="text" name="city" component={InputBox} placeholder="City" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-6 mb-3">
                                    <Field type="text" name="contactNumber" component={InputBox} placeholder="Contact" floatinglabel={true} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Field type="text" name="contactEmail" component={InputBox} placeholder="Email" floatinglabel={true} />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="checkbox" name="active" component={CheckBox} label="Active"/>
                            </div>

                            <ButtonBar
                                showDelete={event.id !== 0}
                                onDelete={() => onDeleteEntity(event.id)}
                                saving={saving}
                                deleting={deleting}
                                dirty={props.dirty}
                                isValid={props.isValid}
                            />
                        </form>
                    </React.Fragment>
                )}
            /> : null
    )
}

export default EventForm

EventForm.propTypes = {
    event: PropTypes.object,
    eventtypes: PropTypes.array,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    fetching: PropTypes.bool,
    deleting: PropTypes.bool,
    dirty: PropTypes.bool,
    isValid: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func
}

/*
<Field type="select" name="documentTypeId" component={SelectBox} options = {_options} floatinglabel="0"/>
*/

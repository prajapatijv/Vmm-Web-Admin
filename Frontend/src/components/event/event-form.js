import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const EventForm = ({ event, eventtypes, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...event }
    const _eventTypes = eventtypes || []

    const schema = Yup.object().shape({
        id: Yup.number(),
        eventTypeId: Yup.number(),
        eventName: Yup.string().min(2).max(50).required(),
        description: Yup.string().min(2).max(50).required(),
        startDate: Yup.date().required(),
        endDate: Yup.date().required(),
        time:Yup.time().notRequired(),
        address1:Yup.number().notRequired(),
        address2:Yup.number().notRequired(),
        city:Yup.number().required(),
        contactNumber:Yup.string().notRequired(),
        contactEmail:Yup.string().notRequired()
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
                                <Field type="text" name="eventTypeId" component={InputBox} placeholder="Event Type" floatinglabel="1" />
                                <Field className="custom-select" name="eventTypeId" component="select" placeholder="Event Type">
                                    {
                                        _eventTypes.map((item) =><option key={item.id} value={item.id}>{item.description}</option>)
                                    }
                                </Field>
                            </div>

                            <div className="form-row mb-3">
                                <Field type="text" name="eventName" component={InputBox} placeholder="Evant Name" floatinglabel="1" />
                            </div>

                            <div className="form-row mb-3">
                                <Field type="datetime" name="startDate" component={InputBox} placeholder="Start Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="datetime" name="endDate" component={InputBox} placeholder="End Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="datetime" name="time" component={InputBox} placeholder="Time" floatinglabel="1" />
                            </div>

                            <div className="form-row mb-3">
                                <Field type="text" name="address1" component={InputBox} placeholder="Address" floatinglabel="1" />
                                <Field type="text" name="address2" component={InputBox} placeholder="Address" floatinglabel="1" />
                                <Field type="text" name="city" component={InputBox} placeholder="City" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="eventContact" component={InputBox} placeholder="Contact" floatinglabel="1" />
                                <Field type="text" name="eventEmail" component={InputBox} placeholder="Email" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="groupYear" component={InputBox} placeholder="Group Year" floatinglabel="1" />
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
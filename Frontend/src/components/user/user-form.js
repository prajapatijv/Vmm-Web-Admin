import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const UserForm = ({ user, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...user }

    const schema = Yup.object().shape({
        firstName: Yup.string().min(2).max(50).required(),
        lastName: Yup.string().min(2).max(50).required(),
        userName: Yup.string().min(2).max(30).required(),
        password: Yup.string().min(6).max(15).required()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        user ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="User" fetching={props.fetching} onClose={onClose} adding={user.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <Field type="text" name="firstName" component={InputBox} placeholder="First name" floatinglabel="1" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Field type="text" name="lastName" component={InputBox} placeholder="Last name" floatinglabel="1" />
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="userName" component={InputBox} prefix="@" placeholder="User name" floatinglabel="1" floatingleft="40px"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="password" name="password" component={InputBox} placeholder="Password" floatinglabel="1" />
                                <small id="passwordHelpBlock" className="form-text text-muted">
                                    Must be 6-15 characters long, contains letters and numbers.
                                </small>
                            </div>

                            <ButtonBar
                                showDelete={user.id !== 0}
                                onDelete={(id) => onDeleteEntity(user.id)}
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

export default UserForm

UserForm.propTypes = {
    user: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}
import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { TextAreaBox } from '../shared/textarea-box'
import { CheckBox } from '../shared/check-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const QueryForm = ({ query, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...query }

    const schema = Yup.object().shape({
        id: Yup.number(),
        name: Yup.string().min(2).max(50).required(),
        query: Yup.string().min(2).max(50).required(),
        contact: Yup.string().min(2).max(50).required(),
        email: Yup.string().min(2).max(50).required(),
        answer: Yup.string(),
        replied: Yup.bool()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    return (
        query ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Query" fetching={props.fetching} onClose={onClose} adding={query.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{query.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{query.contact} | {query.email} </h6>
                                        <p className="card-text">{query.query}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="form-row mb-2">
                                <Field type="text" name="answer" component={TextAreaBox} placeholder="Answer" floatinglabel={true} />
                            </div>

                            <div className="form-row mb-2">
                                <Field type="checkbox" name="replied" component={CheckBox} label="Replied" floatinglabel={true} />
                            </div>

                            <ButtonBar
                                showDelete={query.id !== 0}
                                onDelete={() => onDeleteEntity(query.id)}
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

export default QueryForm

QueryForm.propTypes = {
    query: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    fetching: PropTypes.bool,
    deleting: PropTypes.bool,
    dirty: PropTypes.bool,
    isValid: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func,
    allowDelete: PropTypes.bool
}
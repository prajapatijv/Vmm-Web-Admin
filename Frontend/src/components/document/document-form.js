import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const DocumentForm = ({ document, documentTypes, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...document }
    const _documentTypes = documentTypes || []

    const schema = Yup.object().shape({
        id: Yup.number(),
        name: Yup.string().min(2).max(50).required(),
        shortName: Yup.string().min(2).max(50).required(),
        active: Yup.boolean().notRequired()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        document ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Document" fetching={props.fetching} onClose={onClose} adding={document.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="title" component={InputBox} placeholder="Title" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="description" component={InputBox} placeholder="Description" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="publishDate" component={InputBox} placeholder="Publish Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="expiryDate" component={InputBox} placeholder="Expiry Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="documentPath" component={InputBox} placeholder="Document Path" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="documentTypeId" component={InputBox} placeholder="Document TypeId" floatinglabel="1" />
                                <Field className="custom-select" name="documentTypeId" component="select" placeholder="Document Type">
                                    {
                                        _documentTypes.map((item) =><option value={item.id}>{item.description}</option>)
                                    }
                                </Field>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="checkbox" name="active" component={CheckBox} label="Active" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="groupYear" component={InputBox} placeholder="Group Year" floatinglabel="1" />
                            </div>

                            <ButtonBar
                                showDelete={document.id !== 0}
                                onDelete={(id) => onDeleteEntity(document.id)}
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

export default DocumentForm

DocumentForm.propTypes = {
    document: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}
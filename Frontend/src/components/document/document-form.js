import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import { SelectBox } from '../shared/select-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const DocumentForm = ({ document, documenttypes, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...document }
    const _documentTypes = documenttypes || []
    //const _options = _documentTypes.map((item) => {return { value:item.id, label:item.description }})

    const schema = Yup.object().shape({
        id: Yup.number(),
        title: Yup.string().min(2).max(50).required(),
        description: Yup.string().min(2).max(50).required(),
        publishDate: Yup.date().required(),
        expiryDate: Yup.date().required(),
        documentPath:Yup.string().required(),
        documentTypeId:Yup.number().required(),
        groupYear:Yup.number().notRequired(),
        actions:Yup.boolean().notRequired()
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
                                <Field type="datetime" name="publishDate" component={InputBox} placeholder="Publish Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="datetime" name="expiryDate" component={InputBox} placeholder="Expiry Date" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="documentPath" component={InputBox} placeholder="Document Path" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="documentTypeId" component={SelectBox} options={_documentTypes} placeholder="Document Type" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="checkbox" name="active" component={CheckBox} label="Active" floatinglabel="1" />
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="groupYear" component={InputBox} placeholder="Group Year" floatinglabel="1" />
                            </div>

                            <ButtonBar
                                showDelete={document.id !== 0}
                                onDelete={() => onDeleteEntity(document.id)}
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
    documenttypes: PropTypes.array,
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

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import { SelectBox } from '../shared/select-box'
import { DatePickerBox } from '../shared/date-picker'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'
import { FileUpolader } from '../shared/file-uploader'

import { Config } from '../../AppConfig'


const DocumentForm = ({ document, documenttypes, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    /*if (document !== undefined && document.enabled !== undefined) {
        document.enabled = document.enabled === 1
    } else {
        if (document !== undefined) {
            document.enabled = true
        }
    }*/

    const _init = { ...document }
    const _documentTypes = documenttypes || []
    //const _options = _documentTypes.map((item) => {return { value:item.id, label:item.description }})
    const serverPath = `${Config.API_URL}/file`

    const schema = Yup.object().shape({
        id: Yup.number(),
        title: Yup.string().min(2).max(50).required(),
        description: Yup.string().min(2).max(50).required(),
        publishDate: Yup.string().required(),
        expiryDate: Yup.string().required(),
        documentPath:Yup.string().notRequired(),
        documentTypeId:Yup.number().required(),
        groupYear:Yup.number().notRequired(),
        enabled:Yup.bool().notRequired()
    })

    const onSaveEntity = (values, actions) => {
        values.documentPath = documentPath
        values.enabled = values.enabled === true ? 1 : 0; 
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    const [documentPath, setDocumentPath] = useState("")

    const onProcessDocument = (error, file) => {
        setDocumentPath(file.serverId)
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
                            <div className="form-row mb-2">
                                <div className="col-md-5">
                                    <Field type="text" name="documentTypeId" component={SelectBox} options={_documentTypes} placeholder="Document Type" floatinglabel={true} />
                                </div>
                                <div className="col-md-5 ml-auto">
                                    <Field type="checkbox" name="enabled" component={CheckBox} label="Active" floatinglabel={true} />
                                </div>
                            </div>

                            <div className="form-row mb-2">
                                <Field type="text" name="title" component={InputBox} placeholder="Title" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <Field type="text" name="description" component={InputBox} placeholder="Description" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-md-5">
                                    <Field type="text" name="publishDate" component={DatePickerBox} placeholder="Publish Date" showTime={true} floatinglabel={true} />
                                </div>
                                <div className="col-md-5">
                                    <Field type="text" name="expiryDate" component={DatePickerBox} placeholder="Expiry Date" showTime={true} floatinglabel={true} />
                                </div>
                            </div>
                            
                            <FileUpolader
                                    maxFileSize="30MB"
                                    name="documentPath" 
                                    acceptedFileTypes={['application/pdf']}
                                    server={serverPath}
                                    onProcessFile={onProcessDocument}
                                    allowMultiple={false} 
                                    label="Upload document" 
                                    savedFileName={document.documentPath}
                                />

                            <div className="form-row mb-2">
                                <div className="col-md-4 mb-3">
                                    <Field type="text" name="groupYear" component={InputBox} placeholder="Group Year" floatinglabel={true} />
                                </div>
                            </div>

                            <ButtonBar
                                showDelete={document.id !== 0}
                                onDelete={() => onDeleteEntity(document.id)}
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
    handleReset: PropTypes.func,
    allowDelete:PropTypes.bool
}

/*
<Field type="select" name="documentTypeId" component={SelectBox} options = {_options} floatinglabel="0"/>
*/

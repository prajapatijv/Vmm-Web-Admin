import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import { DatePickerBox } from '../shared/date-picker'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'
import { FileUpolader } from '../shared/file-uploader'
import { ImageUpolader } from '../shared/image-uploader'

import { Config } from '../../AppConfig'


const PopupForm = ({ popup, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...popup }
    const serverPath = `${Config.API_URL}/file`

    const schema = Yup.object().shape({
        id: Yup.number(),
        title: Yup.string().min(2).max(50).required(),
        shortName: Yup.string().min(2).max(30).required(),
        enabled: Yup.bool(),
        posterImage: Yup.string().notRequired(),
        documentLink: Yup.string().notRequired(),
        publishDate: Yup.date().notRequired(),
        expiryDate: Yup.date().notRequired(),
        popupWidth: Yup.number().max(100)
    })

    const onSaveEntity = (values, actions) => {
        values.posterImage = posterImage
        values.documentLink = document
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    const [posterImage, setPosterImage] = useState("")
    const [document, setDocument] = useState("")

    const onProcessPosterFile = (error, file) => {
        setPosterImage(file.serverId)
    }

    const onProcessDocumentFile = (error, file) => {
        setDocument(file.serverId)
    }

    return (
        popup ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Popup" fetching={props.fetching} onClose={onClose} adding={popup.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-2">
                                <div className="col-md-5">
                                    <Field type="number" name="popupWidth" component={InputBox} placeholder="Popup Width" floatinglabel={true} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-5">
                                    <Field type="checkbox" name="enabled" component={CheckBox} label="Active" floatinglabel={true} />
                                </div>
                            </div>

                            <div className="form-row mb-2">
                                <Field type="text" name="title" component={InputBox} placeholder="Title" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <Field type="text" name="shortName" component={InputBox} placeholder="Short Name" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-md-6">
                                    <Field type="text" name="publishDate" component={DatePickerBox} placeholder="Publish Date"  showTime={true} floatinglabel={true} />
                                </div>
                                <div className="col-md-6">
                                    <Field type="text" name="expiryDate" component={DatePickerBox} placeholder="Expiry Date" showTime={true} floatinglabel={true} />
                                </div>
                            </div>
                            
                            <ImageUpolader name="posterImage"
                                        maxFileSize="5MB"
                                        onProcessFile={onProcessPosterFile}
                                        acceptedFileTypes={['image/png','image/jpeg','image/jpg']}
                                        server={serverPath}
                                        allowMultiple={false} labelIdle="Upload an image"
                                        savedFileName={popup.posterImage} />


                            <div className="form-row mb-2">
                                <Field type="checkbox" name="showDocument" component={CheckBox} label="Do you want to have document attachment?" />
                            </div>

                            <FileUpolader name="documentLink" 
                                    maxFileSize="30MB"
                                    onProcessFile={onProcessDocumentFile}
                                    acceptedFileTypes={['application/pdf']}
                                    server={serverPath}
                                    allowMultiple={false} labelIdle="Upload document"
                                    savedFileName={popup.documentLink} />

                            <ButtonBar
                                showDelete={popup.id !== 0}
                                onDelete={() => onDeleteEntity(popup.id)}
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

export default PopupForm

PopupForm.propTypes = {
    popup: PropTypes.object,
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

import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import { TextAreaBox } from '../shared/textarea-box'

import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const AssetForm = ({ asset, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...asset }

    const schema = Yup.object().shape({
        id: Yup.number(),
        assetType: Yup.string().min(2).max(10).required(),
        fileName: Yup.string().min(2).max(2000).required(),
        fileSizeBytes: Yup.number().required(),
        title: Yup.string().min(2).max(100).required(),
        description: Yup.string().required(),
        transcripts: Yup.string().notRequired(),
        author: Yup.string().notRequired(),
        categories: Yup.array().required(),
        tags: Yup.array().required(),
        recordDate: Yup.date().notRequired(),
        quality: Yup.string().notRequired(),
        mediaType: Yup.string().notRequired(),
        compressionFormat: Yup.string().notRequired()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    return (
        asset ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Asset" fetching={props.fetching} onClose={onClose} adding={asset.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3 nav nav-tabs">
                                <a href="#video" className="nav-item nav-link active">Video</a>
                                <a href="#image" className="nav-item nav-link">Image</a>
                                <a href="#audio" className="nav-item nav-link">Audio</a>
                                <a href="#document" className="nav-item nav-link">Document</a>
                            </div>
                            <div className="form-row mb-3">
                                <label htmlFor="title">Upload File</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Upload file" aria-label="Upload file" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Upload</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="title" component={InputBox} placeholder="Title" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="textarea" rows="4" name="description" component={TextAreaBox} placeholder="Description" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="textarea" rows="3" name="transcripts" component={TextAreaBox} placeholder="Transcript" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="author" component={InputBox} placeholder="Author" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="categories" component={InputBox} placeholder="Categories" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="tags" component={InputBox} placeholder="Tags" floatinglabel="1"/>
                            </div>

                            <ButtonBar
                                showDelete={asset.id !== 0}
                                onDelete={(id) => onDeleteEntity(asset.id)}
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

export default AssetForm

AssetForm.propTypes = {
    asset: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}
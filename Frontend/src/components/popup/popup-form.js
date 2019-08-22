import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'
import { DatePickerBox } from '../shared/date-picker'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

import { Config } from '../../AppConfig'
import { yieldExpression } from '@babel/types';

const PopupForm = ({ popup, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...popup }
    const serverPath = `${Config.API_URL}/file`

    const schema = Yup.object().shape({
        id: Yup.number(),
        title: Yup.string().min(2).max(50).required(),
        shortName: Yup.string().min(2).max(10).required(),
        enabled: Yup.bool(),
        posterImage: Yup.string().required(),
        documentLink: Yup.string(),
        publishDate: Yup.date()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    //const [files, setFiles] = useState([])

    const onfileUpload = (fileList) => {
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
                                <Field type="checkbox" name="enabled" component={CheckBox} label="Active" floatinglabel={true} />
                            </div>

                            <div className="form-row mb-2">
                                <Field type="text" name="title" component={InputBox} placeholder="Title" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <Field type="text" name="shortName" component={InputBox} placeholder="Short Name" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-2">
                                <div className="col-md-4">
                                    <Field type="text" name="publishDate" component={DatePickerBox} placeholder="Publish Date" floatinglabel={true} />
                                </div>
                            </div>
                            
                            <FilePond name="posterImage" 
                                        server={serverPath}
                                        onupdatefiles={onfileUpload}
                                        allowMultiple={false} labelIdle="Upload or drop image" />

                            <FilePond name="documentLink" 
                                        server={serverPath}
                                        onupdatefiles={onfileUpload}
                                        allowMultiple={false} labelIdle="Upload or drop document" />

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

/*
<Field type="select" name="documentTypeId" component={SelectBox} options = {_options} floatinglabel="0"/>
*/

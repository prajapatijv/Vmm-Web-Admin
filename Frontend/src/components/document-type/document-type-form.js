import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const DocumentTypeForm = ({ documenttype, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...documenttype }

    const schema = Yup.object().shape({
        id:Yup.number(),
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
        documenttype ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Document Type" fetching={props.fetching} onClose={onClose} adding={documenttype.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="description" component={InputBox} placeholder="Description" floatinglabel="1" />
                            </div>

                            <ButtonBar
                                showDelete={documenttype.id !== 0}
                                onDelete={(id) => onDeleteEntity(documenttype.id)}
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

export default DocumentTypeForm

DocumentTypeForm.propTypes = {
    documenttype: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}
import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'
import { SelectBox } from '../shared/select-box'

const DistrictForm = ({ district, states, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...district }
    
    const _states = states.map(function (a) {
        return {
            id: a.id,
            description: a.stateName
        }
    })

    const schema = Yup.object().shape({
        id:Yup.number(),
        districtName: Yup.string().min(2).max(100).required(),
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        district ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="District" fetching={props.fetching} onClose={onClose} adding={district.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="districtName" component={InputBox} placeholder="District Name" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-6">
                                    <Field type="text" name="stateId" component={SelectBox} placeholder="State" options={_states} floatinglabel={true} />
                                </div>
                            </div>
                            <ButtonBar
                                showDelete={district.id !== 0}
                                onDelete={() => onDeleteEntity(district.id)}
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

export default DistrictForm

DistrictForm.propTypes = {
    district: PropTypes.object,
    states: PropTypes.array,
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
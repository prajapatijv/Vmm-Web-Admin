import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

import { InputBox } from '../shared/input-box'
import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'
import { SelectBox } from '../shared/select-box'
import { FilterDistricts } from '../shared/utils'

const TalukaForm = ({ taluka, states, districts, onClose, onSave, onDelete, saving, deleting, allowDelete }) => {

    const _init = { ...taluka }

    const _states = states.map(function (a) {
        return {
            id: a.id,
            description: a.stateName
        }
    })

    const _districts = districts.map(function (a) {
        return {
            id: a.id,
            description: a.districtName,
            stateId: a.stateId
        }
    })

    const [filteredDistricts, setFilteredDistricts] = useState([])

    const handleStateChange = (stateId) => {
        const value = FilterDistricts(stateId, _districts)
        setFilteredDistricts(value)
    }

    const schema = Yup.object().shape({
        id:Yup.number(),
        talukaName: Yup.string().min(2).max(100).required(),
        stateId: Yup.number().notRequired(),
        districtId: Yup.number().notRequired(),
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }

    return (
        taluka ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Taluka" fetching={props.fetching} onClose={onClose} adding={taluka.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row mb-3">
                                <Field type="text" name="talukaName" component={InputBox} placeholder="Taluka Name" floatinglabel={true} />
                            </div>
                            <div className="form-row mb-3">
                                <div className="col-md-6">
                                    <Field type="text" name="stateId" component={SelectBox} placeholder="State" options={_states} 
                                        floatinglabel={true} 
                                        onChange={e => handleStateChange(e.target.value)} />
                                </div>

                                <div className="col-md-6">
                                    <Field type="text" name="districtId" component={SelectBox} placeholder="District" options={filteredDistricts} floatinglabel={true} />
                                </div>
                            </div>

                            <ButtonBar
                                showDelete={taluka.id !== 0}
                                onDelete={() => onDeleteEntity(taluka.id)}
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

export default TalukaForm

TalukaForm.propTypes = {
    taluka: PropTypes.object,
    districts: PropTypes.array,
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
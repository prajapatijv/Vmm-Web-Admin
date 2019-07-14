import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Field } from 'formik'
import { InputBox } from '../shared/input-box'
import * as Yup from 'yup'

import PageTitle from '../shared/page-title'
import ButtonBar from '../shared/button-bar'

const ItemForm = ({ item, onClose, onSave, onDelete, saving, deleting }) => {

    const _init = { ...item }

    const schema = Yup.object().shape({
        id:Yup.number(),
        itemName: Yup.string().min(2).max(50).required(),
        rate: Yup.number().required(),
        type: Yup.string().min(2).max(30).required(),
        stock: Yup.number()
    })

    const onSaveEntity = (values, actions) => {
        onSave(values)
        actions.setSubmitting(false)
    }

    const onDeleteEntity = (id) => {
        onDelete(id)
    }


    return (
        item ?
            <Formik
                enableReinitialize
                initialValues={_init}
                validationSchema={schema}
                validateOnBlur={true}
                onSubmit={onSaveEntity}
                render={props => (
                    <React.Fragment>
                        <div className="modal-header mb-3 py-0">
                            <PageTitle title="Item" fetching={props.fetching} onClose={onClose} adding={item.id === 0}></PageTitle>
                        </div>
                        <form className="needs-validation"
                            onSubmit={props.handleSubmit}
                            onReset={props.handleReset}>
                            <div className="form-row">
                                <Field type="text" name="itemName" component={InputBox} placeholder="Item Name" floatinglabel="1"/>
                            </div>
                            <div className="form-row mb-3">
                                <Field type="text" name="type" component={InputBox} placeholder="Type" floatinglabel="1"/>
                            </div>
                            
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <Field type="number" name="rate" component={InputBox} placeholder="Rate" floatinglabel="1"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Field type="number" name="stock" component={InputBox} placeholder="Stock" floatinglabel="1"/>
                                </div>
                            </div>

                            <ButtonBar
                                showDelete={item.id !== 0}
                                onDelete={(id) => onDeleteEntity(item.id)}
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

export default ItemForm

ItemForm.propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    saving: PropTypes.bool,
    deleting: PropTypes.bool
}
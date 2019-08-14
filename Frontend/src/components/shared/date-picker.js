import React from 'react'
import { ErrorMessage } from 'formik'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import "react-datepicker/dist/react-datepicker.css"
import './date-picker.scss'

export const DatePickerBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors, /*handleChange,*/ setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    var cls = classNames({
        'form-control': true,
        'is-invalid': touched[field.name] && errors[field.name],
        'is-valid': touched[field.name] && !errors[field.name]
    })

    var clsig = classNames({
        'input-group': true,
        'floating-label': props.floatinglabel,
        'date-picker':true
    })

    const onChange = (name, value) => {
        setFieldValue(name, value)
    }

    return (
        <div className={clsig} >
            <DatePicker
                //customInput={<DatePickerInputMarkUp value={dt} props={props} cls={cls} />}
                //placeholderText={props.placeholder}
                //isClearable={true}
                dateFormat="dd-MMM-yyyy"
                selected={(field.value && new Date(field.value)) || null}
                onChange={val => {
                    onChange(field.name, val);
                }}
                field={field} props={props} touched={touched} errors={errors} className={cls} />
            <FloatingLabel props={props} />                
            <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
        </div>
    )
}

const FloatingLabel = ({ props }) => {
    const style = { left: props.floatingleft }
    return (
        props.floatinglabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
    )
}

/*
const DatePickerInputMarkUp = ({ onChange, placeholder, value, id, onClick, props, cls }) => (
        <React.Fragment>
            <input
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                id={id}
                onClick={onClick}
                className={cls}
            />
            <FloatingLabel props={props} />
        </React.Fragment>
);


DatePickerInputMarkUp.propTypes = {
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    id: PropTypes.string,
    props: PropTypes.object,
    cls: PropTypes.string
}*/

DatePickerBox.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.array,
    floatinglabel: PropTypes.bool,
    cls: PropTypes.string,
    placeholder: PropTypes.string
}

FloatingLabel.propTypes = {
    floatingleft: PropTypes.bool,
    floatinglabel: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    props: PropTypes.object
}

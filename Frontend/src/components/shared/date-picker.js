import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import "react-datepicker/dist/react-datepicker.css"
import './input-box.scss'

export const DatePickerBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors, /*handleChange,*/ }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => {
    var cls = classNames({
        'form-control': true,
        'is-invalid': touched[field.name] && errors[field.name],
        'is-valid': touched[field.name] && !errors[field.name]
    })

    var clsig = classNames({
        'input-group':true,
        'floating-label':props.floatinglabel,
      })

    const [date, setDate] = useState(new Date())

    return (
        <div className={clsig} >
            <DatePicker
                placeholderText = {props.placeholder}
                isClearable={true}
                dateFormat="dd-MMM-yyyy"
                selected={date}
                minDate={date}
                onChange={(value) => setDate(value)}
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


DatePickerBox.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.bool,
    errors: PropTypes.array,
    floatinglabel: PropTypes.bool,
    cls: PropTypes.object,
    placeholder: PropTypes.string
}

FloatingLabel.propTypes = {
    floatingleft: PropTypes.bool,
    floatinglabel: PropTypes.bool,
    name: PropTypes.string,
    placeholder:PropTypes.string,
    props: PropTypes.object
  }
  
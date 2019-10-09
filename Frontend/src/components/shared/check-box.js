import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './check-box.scss'

export const CheckBox = ({
  field,// { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, handleChange, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'custom-control-input':true,
    'is-invalid': touched[field.name] && errors[field.name]
  })

  const onClick = (e) => {
    setFieldValue(field.name, e.currentTarget.checked)
    handleChange(e);
  }

  return (
    <div className="custom-control custom-switch">
      <Check field={field} values={values} props={props} touched={touched} errors={errors} cls={cls} onClick={onClick} onChange={onClick}/>
      <label className="custom-control-label" htmlFor={field.name}>
        {props.label}
      </label>
    </div>
  )
}

const Check = ({ field, props, touched, errors, cls, onClick}) =>
  <input className={cls} id={field.name}
    invalid={touched[field.name] && errors[field.name] ? false : true}
    onClick={onClick}
    onChange={onClick}
    {...field} {...props}
  />



  Check.propTypes = {
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.object,
    cls: PropTypes.string,
    onClick: PropTypes.func
  }
  
  CheckBox.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    props: PropTypes.object,
    floatinglabel: PropTypes.bool,
    label: PropTypes.string
  }
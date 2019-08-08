import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const CheckBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  var cls = classNames({
    'custom-control-input':true,
    'is-invalid': touched[field.name] && errors[field.name]
  })

  return (
    <div className="custom-control custom-switch">
      <Check field={field} props={props} touched={touched} errors={errors} cls={cls} />
      <label className="custom-control-label" htmlFor={field.name}>
        {props.label}
      </label>
    </div>
  )
}

const Check = ({ field, props, touched, errors, cls }) =>
  <input className={cls} id={field.name}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />



  Check.propTypes = {
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.bool,
    errors: PropTypes.array,
    cls: PropTypes.object
  }
  
  CheckBox.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    props: PropTypes.object,
    floatinglabel: PropTypes.bool,
    label: PropTypes.string
  }
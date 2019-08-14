import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import classNames from 'classnames'
import './input-box.scss'


export const InputBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
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
    'prefix-text':props.prefix
  })

  if (props.prefix) {
    return (
      <div className={clsig}>
        <div className="input-group-prepend">
          <span className="input-group-text">{props.prefix}</span>
        </div>
        <TextBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
        <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
      </div>
    )
  }
  else {
    return (
      <div className={clsig} >
        <TextBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
        <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
      </div>
    )
  }
};

const TextBox = ({ field, props, touched, errors, cls }) =>
  <input className={cls}
    invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
    {...field} {...props}
  />

const FloatingLabel = ({props}) => {
  const style = { left: props.floatingleft}
  return(
    props.floatinglabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
  )
}



TextBox.propTypes = {
  field: PropTypes.object,
  props: PropTypes.object,
  touched: PropTypes.string,
  errors: PropTypes.array,
  cls: PropTypes.string
}

FloatingLabel.propTypes = {
  floatingleft: PropTypes.bool,
  floatinglabel: PropTypes.bool,
  name: PropTypes.string,
  placeholder:PropTypes.string,
  props: PropTypes.object
}

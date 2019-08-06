import React from 'react'
import { ErrorMessage } from 'formik'
import classNames from 'classnames'

export const SelectBox = ({
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
    })
  
    return (
    <div className={clsig} >
        <SelectBox field={field} props={props} touched={touched} errors={errors} cls={cls} />
        <FloatingLabel props={props} />
        <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
    </div>
    )
  };
  
  const SelectBox = ({ field, props, touched, errors, cls }) =>
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
import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import classNames from 'classnames'
import './select-box.scss'

export const SelectBox = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  options,
  ...props
}) => {
  var cls = classNames({
    'custom-select':true,
    'form-control': true,
    'is-invalid': touched[field.name] && errors[field.name],
    'is-valid': touched[field.name] && !errors[field.name]
  })

  var clsig = classNames({
    'input-group': true,
    'floating-label': props.floatinglabel,
  })

  return (
    <div className={clsig} >
      <SelectInput field={field} props={props} touched={touched} errors={errors} cls={cls}
        options={options}  />
      <FloatingLabel props={props} />
      <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
    </div>
  )
};

const SelectInput = ({ field, props, touched, errors, cls, options }) => {
  return (
    <select className={cls} 
      invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
      {...field} {...props} 
    > 
      <option key='-1' value="DEFAULT" >Please select {props.placeholder.toLowerCase()}...</option>
      {options.map((item) => <option key={item.id} value={item.id}>{item.description}</option>)}
    </select>
  )
}

const FloatingLabel = ({ props }) => {
  const style = { left: props.floatingleft }
  return (
    props.floatinglabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
  )
}


SelectInput.propTypes = {
  field: PropTypes.object,
  props: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  cls: PropTypes.string,
  getValue: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string
}

FloatingLabel.propTypes = {
  floatingleft: PropTypes.bool,
  floatinglabel: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  props: PropTypes.object
}

SelectBox.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object,
  props: PropTypes.object,
  floatinglabel: PropTypes.bool,
  options: PropTypes.array,
}
import React from 'react'
import PropTypes from 'prop-types'
import Select from "react-select"
import { ErrorMessage } from 'formik'
import classNames from 'classnames'

export const SelectBox = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors , setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    options,
    isMulti = false,
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

    const onChange = (option) => {
      setFieldValue(
        field.name,
        isMulti
          ? option.map((item) => item.value)
          : (option).value
      );
    }
  
    const getValue = () => {
      if (options) {
        return isMulti
          ? options.filter(option => field.value.indexOf(option.value) >= 0)
          : options.find(option => option.value === field.value);
      } else {
        return isMulti ? [] : ("");
      }
    }

    return (
    <div className={clsig} >
        <SelectInput field={field} props={props} touched={touched} errors={errors} cls={cls} 
                    onChange={onChange} getValue={getValue} options={options} isMulti={isMulti} />
        <FloatingLabel props={props} />
        <ErrorMessage className="invalid-feedback" component="div" name={field.name} />
    </div>
    )
  };
  
  const SelectInput = ({ field, props, touched, errors, cls, getValue, onChange, options, isMulti }) =>
    <Select className={cls}
      invalid={touched[field.name] && errors[field.name] ? "false" : "true"}
      value={getValue()}
      options={options}
      isMulti={isMulti}
      onChange={onChange}
      {...field} {...props}
    />
  
  const FloatingLabel = ({props}) => {
    const style = { left: props.floatingleft}
    return(
      props.floatinglabel ? <label style={style} htmlFor={props.name}>{props.placeholder}</label> : null
    )
  }


  SelectInput.propTypes = {
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.bool,
    errors: PropTypes.array,
    cls: PropTypes.object,
    getValue: PropTypes.func,
    onChange: PropTypes.func,
    options: PropTypes.array,
    isMulti: PropTypes.bool
  }
  
  FloatingLabel.propTypes = {
    floatingleft: PropTypes.bool,
    floatinglabel: PropTypes.bool,
    name: PropTypes.string,
    placeholder:PropTypes.string,
    props: PropTypes.object
  }
  
  SelectBox.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    props: PropTypes.object,
    floatinglabel: PropTypes.bool,
    options: PropTypes.array,
    isMulti: PropTypes.bool
  }
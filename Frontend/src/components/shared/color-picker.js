import React, { useState } from 'react'
import { SketchPicker } from 'react-color'
import PropTypes from 'prop-types'
import classNames from 'classnames'


export const ColorPicker = ({
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
    })

    const [show, setShow] = useState(false)


    const onAcceptColor = (color) => {
        setFieldValue(field.name, color)
    }

    const popover = {
        position: 'absolute',
        zIndex: '2',
        left:'90px'
      }

    const divStyle = {
        width: "80px", height: "40px", "backgroundColor": field.value, "marginRight": "15px", "borderRadius": "5px"
    }

    return (
        <React.Fragment>
        <div className="shadow p-3 rounded" style={divStyle}> <span className="badge badge-secondary">{field.value}</span></div>
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-light" onClick={() => setShow(true)}>{props.label}</button>
            <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" onClick={() => setShow(true)}>
            </button>
        </div>

        <div className={clsig} >
            {show &&
                <div className="card mb-3" style={popover}>
                    <div className="card-body">
                        <SketchPicker
                            color={field.value}
                            onChangeComplete={(c) => onAcceptColor(c.hex)}
                            field={field} props={props} touched={touched} errors={errors} cls={cls} />
                    </div>
                    <div className="card-footer bg-transparent border-light">
                        <button type="button" className="btn btn-block btn-primary" onClick={() => setShow(false)}>Ok</button>
                    </div>
                </div>
            }
        </div>
        </React.Fragment>
    )
}



ColorPicker.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.object,
    errors: PropTypes.array,
    cls: PropTypes.object,
    label: PropTypes.string,
}
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
    const [color, setColor] = useState('#D3D3D3')


    const onAcceptColor = () => {
        setFieldValue(field.name, color)
        setShow(false)
    }

    const divStyle = {
        width: "80px", height: "40px", "background-color": color, "margin-right": "15px", "border-radius": "5px"
    }

    return (
        <div className={clsig} >
            <div className="shadow-sm p-3 rounded" style={divStyle}></div>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(true)}>{props.label}</button>
                <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" onClick={() => setShow(true)}>
                </button>
            </div>
            {show &&
                <div className="card mb-3">
                    <div className="card-body">
                        <SketchPicker
                            color={color}
                            onChangeComplete={(c) => setColor(c.hex)}
                            field={field} props={props} touched={touched} errors={errors} cls={cls} />
                    </div>
                    <div className="card-footer bg-transparent border-light">
                        <button type="button" className="btn btn-block btn-primary" onClick={onAcceptColor}>Ok</button>
                    </div>
                </div>
            }
        </div>
    )
}



ColorPicker.propTypes = {
    form: PropTypes.object,
    field: PropTypes.object,
    props: PropTypes.object,
    touched: PropTypes.bool,
    errors: PropTypes.array,
    cls: PropTypes.object,
    label: PropTypes.string,
}
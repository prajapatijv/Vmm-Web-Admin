import React from 'react'
import { Feather } from 'react-feather'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import { InputBox } from '../shared/input-box'
import { CheckBox } from '../shared/check-box'

const LoginForm = ({ auth, onLogin }) => {

    const schema = Yup.object().shape({
        userName: Yup.string().min(2).max(30).required(),
        password: Yup.string().min(6).max(15).required(),
        rememberMe: Yup.boolean().notRequired()
    })

    const onLoginAction = (values, actions) => {
        onLogin(values)
        actions.setSubmitting(false)
    }

    return (
        <Formik
            initialValues={auth}
            validationSchema={schema}
            validateOnBlur={true}
            onSubmit={onLoginAction}
            render={props => (
                <React.Fragment>
                    <form className="login-form needs-validation"
                        onSubmit={props.handleSubmit}
                        onReset={props.handleReset}>
                        <Feather size="42px" className="mb-3" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-label-group">
                            <Field type="text" name="userName" component={InputBox} placeholder="User name" floatinglabel="1" />
                        </div>
                        <div className="form-label-group">
                            <Field type="password" name="password" component={InputBox} placeholder="Password" floatinglabel="1" />
                        </div>
                        <div className="form-label-group mb-3">
                            <Field type="checkbox" name="rememberMe" component={CheckBox} label="Remember me"/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={auth.processing} >
                            {auth.processing ? <div className="spinner-border spinner-border-sm text-light py-2 px-2 mr-2" role="status"/> : null}
                            Sign in
                        </button>
                        <p className="mt-5 mb-3 text-muted">© 2019</p>
                    </form>
                </React.Fragment>
            )}
        />
    )
}

export default LoginForm

LoginForm.propTypes = {
    onLogin: PropTypes.func,
    auth: PropTypes.object,
    handleSubmit: PropTypes.func,
    handleReset: PropTypes.func,
    processing: PropTypes.bool
}
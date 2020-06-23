import React from "react"
import { reduxForm, Field } from "redux-form"
import { Input } from "../commons/FormsControl/FormsControl"
import { required, maxLengthCreator } from "../../utils/validator"
import { connect } from "react-redux"
import { login, logout } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import style from "../commons/FormsControl/FomsControls.module.css"

const maxLength = maxLengthCreator(100)

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field type="email" component={Input} validate={[required, maxLength]} name={"email"} placeholder="Email" />
      </div>
      <div>
        <Field type="password" component={Input} validate={[required]} name={"password"} placeholder="Password" />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
        Remember Me
      </div>
      {props.error && <div className={style.formSummaryError}>{props.error}</div>}
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData
    props.login(email, password, rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { login })(Login)

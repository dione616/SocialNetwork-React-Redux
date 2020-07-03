import React from "react"
import { reduxForm, Field } from "redux-form"
import { Input, createField } from "../commons/FormsControl/FormsControl"
import { required, maxLengthCreator } from "../../utils/validator"
import { connect } from "react-redux"
import { login, logout } from "../../redux/auth-reducer"
import { Redirect } from "react-router-dom"
import style from "../commons/FormsControl/FomsControls.module.css"

const maxLength = maxLengthCreator(100)

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required, maxLength], Input, { type: "email" })}
      {createField("Password", "password", [required, maxLength], Input, { type: "password" })}
      {createField("rememberMe", "rememberMe", [], Input, { type: "checkbox" }, "Remember me")}
      {error && <div className={style.formSummaryError}>{error}</div>}
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

import React from "react"
import { reduxForm, Field } from "redux-form"
import { Input } from "../commons/Proloader/FormsControls/FormsControls"
import { required } from "../../utils/validator/validators"

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field type="text" component={Input} validate={[required]} name={"login"} placeholder="Login" />
      </div>
      <div>
        <Field type="password" component={Input} validate={[required]} name={"password"} placeholder="Password" />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" />
        Remember Me
      </div>
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {}
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login

import React from "react"

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login

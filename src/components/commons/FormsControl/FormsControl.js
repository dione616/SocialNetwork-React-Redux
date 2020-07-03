import React from "react"
import styles from "./FomsControls.module.css"
import { Field } from "redux-form"

const FormsControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = error && touched
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormsControl {...props}>
      <input {...input} {...restProps} />
    </FormsControl>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps} />
    </FormsControl>
  )
}

export const createField = (placeholder, name, validators, component, props, text) => (
  <div>
    <Field component={component} validate={validators} name={name} placeholder={placeholder} {...props} />
    {text}
  </div>
)

export default FormsControl

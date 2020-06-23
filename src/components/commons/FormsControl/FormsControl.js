import React from "react"
import styles from "./FomsControls.module.css"

const FormsControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
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

export default FormsControl

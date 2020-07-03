import React, { useState, useEffect } from "react"
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => setEditMode(true)

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>Status: {props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode} />
        </div>
      )}
    </div>
  )
}

export default ProfileStatusWithHooks

import React from "react"
import s from "./ProfileInfo.module.css"
import Loader from "../../commons/Proloader/Loader"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <img className={s.ava} src={props.profile.photos.large} alt="profileImg" />
        <div className={s.description}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <div className={s.status}>{props.profile.aboutMe}</div>
          <div className={s.status}>Looking for: {props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo

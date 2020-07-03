import React from "react"
import s from "./ProfileInfo.module.css"
import Loader from "../../commons/Proloader/Loader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div className={s.profileInfo}>
      <div className={s.descriptionBlock}>
        <img
          className={s.ava}
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : "http://localhost:3000/static/media/logo.9588c95e.jpg"
          }
          alt="profileImg"
        />

        <div className={s.description}>
          <div className={s.fullName}>{props.profile.fullName}</div>
          <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
          <div className={s.status}>Looking for: {props.profile.lookingForAJobDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo

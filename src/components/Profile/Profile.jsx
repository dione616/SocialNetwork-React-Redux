import React from "react"
import classes from "./Profile.module.css"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfileInfo from "./MyPosts/ProfileInfo/Profile"

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}
export default Profile

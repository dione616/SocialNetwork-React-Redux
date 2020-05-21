import { usersAPI, authAPI } from "../api/api"

const SET_USER_DATA = "SET_USER_DATA"
const SET_USER_IMAGE = "SET_USER_IMAGE"

let initialState = {
  userId: 2,
  email: "test@gmail.com",
  login: "Samurai",
  isAuth: false,
  userImgUrl: "",
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true }
    }
    case SET_USER_IMAGE: {
      return { ...state, userImgUrl: action.userImgUrl }
    }

    default:
      return state
  }
}

export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })

export const setUserImg = (userImgUrl) => ({ type: SET_USER_IMAGE, userImgUrl })

export const getAuthData = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data
        dispatch(setUserData(id, email, login))
        usersAPI.getProfileImage().then((res) => {
          dispatch(setUserImg(res.photos.small))
        })
      }
    })
  }
}

export default authReducer

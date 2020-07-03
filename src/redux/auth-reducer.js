import { usersAPI, authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "auth/SET_USER_DATA"
const SET_USER_IMAGE = "SET_USER_IMAGE"

let initialState = {
  userId: null,
  email: "test@gmail.com",
  login: "Samurai",
  isAuth: false,
  userImgUrl: "",
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload }
    }
    case SET_USER_IMAGE: {
      return { ...state, userImgUrl: action.userImgUrl }
    }

    default:
      return state
  }
}

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
})

export const setUserImg = (userImgUrl) => ({ type: SET_USER_IMAGE, userImgUrl })

export const getAuthData = () => {
  return async (dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === 0) {
      let { id, email, login } = response.data
      dispatch(setUserData(id, email, login, true))
      let responseImage = await usersAPI.getProfileImage()

      dispatch(setUserImg(responseImage.photos.small))
    }
  }
}

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
      dispatch(getAuthData())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
      dispatch(stopSubmit("login", { _error: message }))
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer

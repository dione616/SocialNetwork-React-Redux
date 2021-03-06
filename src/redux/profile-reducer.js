import { usersAPI, profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
  posts: [
    { id: 0, message: "Hi, how are you?", likesCount: 12 },
    { id: 1, message: "It's my first post", likesCount: 11 },
    { id: 2, message: "Blabla", likesCount: 11 },
    { id: 3, message: "Dada", likesCount: 11 },
  ],
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        message: action.text,
        likesCount: 15,
      }

      return { ...state, posts: [...state.posts, newPost] }
    }
    case "DELETE_POST": {
      return { ...state, posts: state.posts.filter((p) => p.id !== action.id) }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }

    default:
      return state
  }
}

export const addPostActionCreator = (text) => {
  return { type: ADD_POST, text }
}
export const deletePost = (id) => {
  return { type: "DELETE_POST", id }
}

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile }
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (userId) => {
  return async (dispatch) => {
    if (userId) {
      const response = await usersAPI.getProfile(userId)

      dispatch(setUserProfile(response))
    }
  }
}

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    if (userId) {
      let response = await profileAPI.getStatus(userId)
      dispatch(setStatus(response.data))
    }
  }
}

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  }
}

export default profileReducer

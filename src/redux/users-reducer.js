import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utils/helper"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW"

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOW: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      }
    }

    default:
      return state
  }
}

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const toggleFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOW, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
  }
}

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowing(true, userId))
  let response = await apiMethod(userId)

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowing(false, userId))
}

export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.followUsers.bind(usersAPI), followSuccess)
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollow(dispatch, userId, usersAPI.unfollowUsers.bind(usersAPI), unfollowSuccess)
  }
}

export default usersReducer

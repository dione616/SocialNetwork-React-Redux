import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW"

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      console.log("follow")

      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }
    }
    case UNFOLLOW: {
      console.log("unfollow")
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
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

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, userId))
    usersAPI.followUsers(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowing(false, userId))
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowing(true, userId))
    usersAPI.unfollowUsers(userId).then((response) => {
      if (response.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowing(false, userId))
    })
  }
}

export default usersReducer

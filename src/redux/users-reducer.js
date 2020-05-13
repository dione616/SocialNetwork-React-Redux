const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: true }
            }
            return user
          }),
        ],
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.userId) {
              return { ...user, followed: false }
            }
            return user
          }),
        ],
      }
    }
    case SET_USERS: {
      //{ ...state, users: [...state.users, ...action.users] }
      return { ...state, users: action.users }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }

    default:
      return state
  }
}

export const followAC = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersReducer

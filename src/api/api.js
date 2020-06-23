import axios from "axios"

const vetal160199 = "78c66b05-e969-49e4-ab98-a046293b70bf"
const test567891 = "847f55aa-e9b7-4a02-ac23-bf0392f6da52"
const test5678912 = "55a24c35-e1bc-4cd8-85f2-81e7e910c10f"

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "847f55aa-e9b7-4a02-ac23-bf0392f6da52" },
})

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
  },
  unfollowUsers: (id) => {
    return instanse.delete(`follow/${id}`).then((response) => response.data)
  },
  followUsers: (id) => {
    return instanse.post(`follow/${id}`, {}).then((response) => response.data)
  },
  getProfileImage: () => {
    return instanse.get(`profile/${2}`).then((response) => response.data)
  },
  getProfile: (userId) => {
    console.warn("This method is deprecated!!!")

    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile: (userId) => {
    return instanse.get(`profile/${userId}`).then((response) => response.data)
  },
  getStatus: (userId) => {
    return instanse.get(`profile/status/${userId}`)
  },
  updateStatus: (status) => {
    return instanse.put(`profile/status`, { status })
  },
}

export const authAPI = {
  me: () => {
    return instanse.get(`auth/me`).then((res) => res.data)
  },
  login: (email, password, rememberMe = false) => {
    return instanse.post(`auth/login`, { email, password, rememberMe })
  },
  logout: () => {
    return instanse.delete(`auth/login`)
  },
}

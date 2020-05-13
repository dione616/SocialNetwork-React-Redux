import React, { Component } from "react"
import s from "./Users.module.css"
import axios from "axios"
import userPhoto from "../../assets/logo.jpg"

class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div className={s.pages}>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => {
                this.onPageChanged(page)
              }}
              className={this.props.currentPage === page ? s.selectedPage : s.page}
            >
              {page}
            </span>
          ))}
        </div>
        {this.props.users.map((user) => (
          <div className={s.user} key={user.id}>
            <div>
              <div className={s.image}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={s.userPhoto}
                  alt="alt"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className="user_info">
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className="user_info">
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
            <div />
          </div>
        ))}
      </div>
    )
  }
}

export default Users

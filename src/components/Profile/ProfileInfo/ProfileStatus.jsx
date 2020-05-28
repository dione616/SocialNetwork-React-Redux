import React, { Component } from "react"
import s from "./ProfileInfo.module.css"

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = (param) => {
    this.setState({ editMode: param })
    if (param === false) {
      this.props.updateUserStatus(this.state.status)
    }
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={() => this.activateEditMode(true)}>Status: {this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={() => this.activateEditMode(false)}
              value={this.state.status && "---"}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus

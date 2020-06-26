import React from "react"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.loginBlock}>
        {props.auth.isAuth ? (
          <div className={s.loginBlockInfo}>
            <img className={s.loginImg} src={props.auth.userImgUrl} alt="Img" />
            {props.auth.login}

            <span className={s.logout}>
              <button onClick={props.logout}>Logout</button>
            </span>
          </div>
        ) : (
          <NavLink to="/login" className={s.item}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  )
}

export default Header

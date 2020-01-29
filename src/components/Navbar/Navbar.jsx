import React from "react"
import classes from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${classes.item}`}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/friends" activeClassName={classes.activeLink}>
          Friends
        </NavLink>
      </div>      
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar

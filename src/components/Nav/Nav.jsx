import React from 'react';
import style from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.itemm}>
                <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.itemm}>
                <NavLink to='/friends' activeClassName={style.activeLink}>Friends</NavLink>
            </div>
            <div className={`${style.itemm} ${style.active}`}>
                <NavLink to='/dialogs' activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>
            <div className={style.itemm}>
                <NavLink to='/music' activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.itemm}>
                <NavLink to='/settings' activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
};

export default Nav;

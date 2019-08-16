import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Dialogs.module.css";

const DialogItem = props => {
  let dialogPath = `/dialogs/` + props.id;
  let dialogName = props.name;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={dialogPath} activeClassName={style.act}>
        {" "}
        {dialogName}{" "}
      </NavLink>
    </div>
  );
};

export default DialogItem;

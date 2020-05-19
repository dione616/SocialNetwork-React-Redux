import React from "react"
import s from "./Users.module.css"
import loader from "../../../assets/loader.png"

const Loader = () => {
  return <img className={s.loader} src={loader} alt="loader" />
}

export default Loader

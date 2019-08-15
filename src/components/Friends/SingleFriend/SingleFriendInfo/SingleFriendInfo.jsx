import React from 'react';
import style from './SingleFriendInfo.module.css';
import {NavLink} from "react-router-dom";

const SingleFriendInfo = props => {
    let friendPath = `/friends/` + props.friendId
    let name = props.friendName
    return (
        <div className={style.item + ' ' + style.active}>
            <img
                src={props.friendImg}
                alt=''
            />
            <NavLink to={friendPath} activeClassName={style.act}> {name} </NavLink>
            <div className={style.delWrite}>
                <a href='#wr' className={style.write}>Write</a>
            </div>
        </div>

    /*return (
        <div className={style.item}>
            <img
                src={props.friendImg}
                alt=''
            />

            <div className={style.name}>{name}</div>
            <div className={style.delWrite}>

                    <a href='#wr' className={style.write}>Write</a>




            </div>

        </div>*/
    );
};

export default SingleFriendInfo;

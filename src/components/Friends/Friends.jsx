import React from 'react';
import SingleFriend from "./SingleFriend/SingleFriend";
import style from './Friends.module.css';
import FriendsInfo from "./FriendsInfo";

const Friends = props => {
    return (
        <div className={style.friendsPage}>
            <FriendsInfo />
            <SingleFriend friendsArr={props.state.friend}/>
        </div>

    )
}

export default Friends;

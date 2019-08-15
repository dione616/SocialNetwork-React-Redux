import React from 'react';
import style from './SingleFriend.module.css';
import SingleFriendInfo from "./SingleFriendInfo/SingleFriendInfo";

const SingleFriend = props => {
    let friendsElements=props.friendsArr.map(f=>{
        return <SingleFriendInfo  friendName={f.name} friendImg={f.image} friendId={f.id}/>
    })/*using map to show all data */
    return (
        <div className={style.friendsPage}>
            <div className={style.friendsList}>
                <div className={style.friendItem}>
                    {friendsElements}
                </div>

            </div>
        </div>
    );
};
export default SingleFriend;

import React from 'react';
import style from '../Dialogs.module.css';


const Messages = props => {
    return (
        <div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
};
export default Messages;

import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = props => {
        let dialogsElements = props.state.dialogs.map(d => {
            const {id, name} = d/*destructuring object d*/
            return <DialogItem name={name} id={id}/>
        })/*using map with destructuring object*/

        let messagesElements = props.state.messages.map(m => {
            return <Messages message={m.message} />
        })/*using map*/
    let textRef=React.createRef()
    let addMessage=()=>{
        let textMessage=textRef.current.value
        props.addMessage(textMessage)
        textRef.current.value=''
    }

        return <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.singleItem}>
                    {dialogsElements}
                </div>

            </div>
            <div className={style.messages}>
                {messagesElements}
                <div className={style.addMessage}>
                    <textarea name="" id="" cols="30" rows="5" ref={textRef} />
                    <br/>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>

        </div>;
    }
;

export default Dialogs;

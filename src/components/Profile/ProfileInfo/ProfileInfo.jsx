import React from 'react';
import style from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className='bio'>
            <img
                src='https://www.akamai.com/uk/en/multimedia/images/intro/image-manager-intro.png'
                alt='backPic'
                width='100%'
                height='100'
            />
            <div className={style.descriptionBlock}>
            <img
                src='https://assets3.thrillist.com/v1/image/1541099/size/tmg-article_default_mobile.jpg'
                alt='ava'
                width='150'
                height='130'
            />
            <div className={style.bioHeader}>
        <h4>Vitalii Polushkin</h4>
        <p>I like: swimming</p>
        <p>Contacts 99-00</p>
        <p>My hobbies: sdf</p>
      </div>
            </div>

        </div>

    );
};

export default ProfileInfo;

import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts messages={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>)
}

export default Profile;
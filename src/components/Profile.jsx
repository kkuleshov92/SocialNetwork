import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
        <div>
            New post
        </div>
            <div className='posts'>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}> 
                    post2
                </div>
            </div>
        </div>
    </div>)
}

export default Profile;
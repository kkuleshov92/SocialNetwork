import React from 'react';
import classes from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <li className={classes.friendItem}>
            <a href="" className={classes.friendLink}>
                <div className={classes.friendImgBox}>
                    <img src={`./img/${props.imgName}`} />
                </div>
                <h3>
                    {props.friendName}
                </h3>
            </a>
        </li>
    )
}

export default FriendItem;
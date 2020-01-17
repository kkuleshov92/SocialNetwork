import React from 'react';
import classes from './FriendLinks.module.css';
import FriendItem from './FriendItem/FriendItem';

const FriendLinks = (props) => {

    let friendList = props.state.getState().navbar.friends.map(element => {
        return (
            <FriendItem friendName={element.name} imgName={element.imgName} />
        )
    });
    
    return (
        <ul>
            {friendList}
        </ul>
    )
}

export default FriendLinks;
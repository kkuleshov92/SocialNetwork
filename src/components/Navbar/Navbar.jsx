import React from 'react';
import classes from './Navbar.module.css';
import SideLinks from './SideLinks/SideLinks'
import FriendLinks from './FriendLinks/FriendLinks';

const Navbar = (props) => {
    return (
        <div className={classes.navbarBody}>
            <SideLinks />
            <FriendLinks state={props.state.friends} />
        </div>
    )
}

export default Navbar;
import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink activeClassName={classes.active} to={`/dialogs/${props.id}`}>
                <img src={`./img/${props.imgName}`} className={classes.dialogImg} />
                
                <span className={classes.dialogName}>
                    {props.name}    
                </span>
            </NavLink>
        </div>
    )
}

export default DialogItem;
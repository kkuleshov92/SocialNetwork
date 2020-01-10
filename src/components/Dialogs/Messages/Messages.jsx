import React from 'react';
import classes from './Messages.module.css'

const Message = (props) => {
    return (
        <div className={classes.text}>
            {props.text}
        </div>
    )
}

export default Message;
import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVMzYkT_DJ7aLQBiSTIRoCiD9k5toWnNGg38j8CK5j-G9kkBxw" alt="avatar" />
            {props.message}
            <div>
                <span>like <span className={classes.like}>{props.likes}</span></span>
            </div>

        </div>
    )
}

export default Post;
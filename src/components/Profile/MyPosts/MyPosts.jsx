import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
        <div>
            New post
        </div>
            <div className='posts'>
                <Post message="Hello, how are you?" likes="10" />
                <Post message="Its my first post" likes="2" />
            </div>
        </div>
        )
}

export default MyPosts;
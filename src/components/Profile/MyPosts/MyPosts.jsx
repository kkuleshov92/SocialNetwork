import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'

let posts = [
    {id: 1, message: 'Hello, how are you?', likesCount: 10},
    {id: 2, message: 'It\'s my first post', likesCount: 7}
]

let postsElemets = posts.map(element => {
    return <Post message={element.message} likes={element.likesCount} />
});

const MyPosts = () => {
    return (
        <div>
            My posts
        <div>
            <div>
                <textarea>

                </textarea>
                <br/>
                <button>
                    Add post
                </button>
            </div>
        </div>
            <div className='posts'>
                {postsElemets}
            </div>
        </div>
        )
}

export default MyPosts;
import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'





const MyPosts = (props) => {
    
    let newPostElement = React.createRef(),
        showPost = () => {

            props.state.addPost();
        }

    let postsElemets = props.state.getState().profile.posts.map(element => {
        return <Post message={element.message} likes={element.likesCount} />
    });

    let changeInput = () => {
        let text = newPostElement.current.value;
        props.state.updateNewPostText(text)
    }

    return (
        <div>
            My posts
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeInput} value={props.state.getState().profile.newPostText} />
                <br/>
                <button onClick={showPost}>
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
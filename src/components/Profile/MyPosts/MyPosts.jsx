import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'





const MyPosts = (props) => {
    let newPostElement = React.createRef(),
        showPost = () => {

            props.dispatch({type : 'ADD-POST'});
        }

    let postsElemets = props.state.profile.posts.map(element => {
        return <Post message={element.message} likes={element.likesCount} />
    });

    let changeInput = () => {
        let text = newPostElement.current.value;
        props.dispatch({type : 'UPDATE-NEW-POST-TEXT', newText : text})
    }

    return (
        <div>
            My posts
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeInput} value={props.state.profile.newPostText} />
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
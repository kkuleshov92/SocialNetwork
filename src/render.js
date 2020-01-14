import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, updateNewDialogText, addDialogText} from './redux/state';

export let reRender = (state) => {
    ReactDOM.render( <App 
        state = {state} 
        addPost = {addPost} 
        updateNewPostText = {updateNewPostText} 
        updateNewDialogText = {updateNewDialogText}
        addDialogText={addDialogText} />, 
        document.getElementById('root'));
}
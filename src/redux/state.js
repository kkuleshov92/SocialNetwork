import { reRender } from "../render";


let state = {
    dialogs : {
        messages : [
            {id: 1, text: 'Hi!'},
            {id: 2, text: 'How are you?!'},
            {id: 3, text: 'How is your holidays?'}
        ],

        newDialogText : '',

        persons : [
            {id: 1, name: 'Вася', imgName: 'dialog1.jpg'},
            {id: 2, name: 'Артур', imgName: 'dialog2.jpg'},
            {id: 3, name: 'Ричард', imgName: 'dialog3.png'},
            {id: 4, name: 'Эдуард', imgName: 'dialog4.jpg'},
            {id: 5, name: 'Иван', imgName: 'dialog5.jpg'},
            {id: 6, name: 'Дональд', imgName: 'dialog6.jpg'},
        ]
    },
    
    profile : {
        posts : [
            {id: 1, message: 'Hello, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post', likesCount: 7}
        ],

        newPostText: ''
    },

    navbar : {
        friends : [
            {id: 1, imgName: 'friend1.jpg', name: 'Мороз'},
            {id: 2, imgName: 'friend2.jpg', name: 'Росомаха'},
            {id: 3, imgName: 'friend3.jpg', name: 'Девчуля'}
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: state.profile.posts.length + 1,
        message: state.profile.newPostText,
        likesCount: 0
    };

    state.profile.posts.push(newPost);
    state.profile.newPostText = '';
    reRender(state);
}

export let addDialogText = () => {
    let newPost = {
        id: state.dialogs.messages.length + 1,
        text: state.dialogs.newDialogText
    };

    state.dialogs.messages.push(newPost);
    state.dialogs.newDialogText = '';
    reRender(state);
}

export let updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    reRender(state);
}

export let updateNewDialogText = (newText) => {
    state.dialogs.newDialogText = newText;
    reRender(state);
}



export default state;
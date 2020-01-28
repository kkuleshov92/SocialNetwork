import  profileReducer from './profileReducer';
import navbarReducer from './navbarReducer';
import dialogsReducer from './dialogsReducer';

let store = {
    _state: {
        dialogs: {
            messages: [{
                    id: 1,
                    text: 'Hi!'
                },
                {
                    id: 2,
                    text: 'How are you?!'
                },
                {
                    id: 3,
                    text: 'How is your holidays?'
                }
            ],

            newDialogText: '',

            persons: [{
                    id: 1,
                    name: 'Вася',
                    imgName: 'dialog1.jpg'
                },
                {
                    id: 2,
                    name: 'Артур',
                    imgName: 'dialog2.jpg'
                },
                {
                    id: 3,
                    name: 'Ричард',
                    imgName: 'dialog3.png'
                },
                {
                    id: 4,
                    name: 'Эдуард',
                    imgName: 'dialog4.jpg'
                },
                {
                    id: 5,
                    name: 'Иван',
                    imgName: 'dialog5.jpg'
                },
                {
                    id: 6,
                    name: 'Дональд',
                    imgName: 'dialog6.jpg'
                },
            ]
        },

        profile: {
            posts: [{
                    id: 1,
                    message: 'Hello, how are you?',
                    likesCount: 10
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 7
                }
            ],

            newPostText: ''
        },

        navbar: {
            friends: [{
                    id: 1,
                    imgName: 'friend1.jpg',
                    name: 'Мороз'
                },
                {
                    id: 2,
                    imgName: 'friend2.jpg',
                    name: 'Росомаха'
                },
                {
                    id: 3,
                    imgName: 'friend3.jpg',
                    name: 'Девчуля'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _reRender() {
        console.log('no function!')
    },
    subscribe(observer) {
        this._reRender = observer;
    },
    dispatch(action) {

        this._state.profile =  profileReducer(this._state.profile, action);
        this._state.dialogs =  dialogsReducer(this._state.dialogs, action);
        this._state.navbar =  navbarReducer(this._state.navbar, action);

        this._reRender(this);
    }
}

window.store = store;

export default store;

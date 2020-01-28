const profileReducer = (state, action) => {

    switch (action.type) {
        case 'ADD-POST' :
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case 'UPDATE-NEW-POST-TEXT' : 
            state.newPostText = action.newText;
            return state;

        default :
            return state;
    }
} 

export default profileReducer;
const dialogsReducer = (state, action) => {

    switch(action.type) {
        case 'ADD-DIALOG-TEXT' :
            let newPost = {
                id: state.messages.length + 1,
                text: state.newDialogText
            };
    
            state.messages.push(newPost);
            state.newDialogText = '';
            return state;

        case 'UPDATE-NEW-DIALOG-TEXT' :
            state.newDialogText = action.newText;
            return state;
        default :
            return state;
    }
}

export default dialogsReducer;
import React from 'react'
import classes from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Messages';






const Dialogs = (props) => {

    let personsElements = props.state.dialogs.persons.map(element => {
        return <DialogItem name={element.name} id={element.id} imgName={element.imgName} />
    });

    let messagesElements = props.state.dialogs.messages.map(item => {
        return <Message text={item.text} />
    });

    let dialogArea = React.createRef(),
        sendText = () => {
            
            props.dispatch({type : 'ADD-DIALOG-TEXT'});
        }

    

    let dialogChange = () => {
        
        let text = dialogArea.current.value;
        props.dispatch({type : 'UPDATE-NEW-DIALOG-TEXT', newText : text})
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__items}>
                    {personsElements}
                </div>

                <div className={classes.textSide}>
                    <div className={classes.messages}>
                        {messagesElements}
                    </div>

                    <div className={classes.dialogArea}>
                        <div>
                            <textarea 
                            ref={dialogArea} 
                            value={props.state.dialogs.newDialogText} 
                            onChange={dialogChange} />
                        </div>
                        <div>
                            <button onClick={sendText}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
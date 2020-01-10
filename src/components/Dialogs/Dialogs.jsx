import React from 'react'
import classes from './Dialogs.module.css';
import DialogItem from './Dialog/DialogItem';
import Message from './Messages/Messages';

let persons = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Артур'},
    {id: 3, name: 'Ричард'},
    {id: 4, name: 'Эдуард'},
    {id: 5, name: 'Иван'},
    {id: 6, name: 'Дональд'},
];

let messages = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'How are you?!'},
    {id: 3, text: 'How is your holidays?'}
]

let personsElements = persons.map(element => {
    return <DialogItem name={element.name} id={element.id} />
});

let messagesElements = messages.map(item => {
    return <Message text={item.text} />
});


const Dialogs = () => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogs__items}>
                    {personsElements}
                </div>

                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
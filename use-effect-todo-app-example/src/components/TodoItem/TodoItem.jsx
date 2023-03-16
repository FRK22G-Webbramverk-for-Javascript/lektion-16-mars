import './TodoItem.css';

function TodoItem(props) {
    //console.log(props);
    let doneText = 'Ej klar';

    if (props.done) {
        doneText = 'Klar'
    }

    return (
        <li className='todo-item'>{ props.todo } - { doneText }</li>
    )
}

export default TodoItem;
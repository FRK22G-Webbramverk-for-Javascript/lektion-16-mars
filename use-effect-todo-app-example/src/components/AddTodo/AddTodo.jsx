import './AddTodo.css';

function AddTodo(props) {
    let todo = '';

    function getTodoInput(event) {
        todo = event.target.value; // Hämtar vad som står i inputfältet
        //console.log(todo);
    }

    function handleClick() {
        console.log(`Lägger till todo: ${todo}`);
        props.addNewTodo(todo);
    }

    return (
        <section className="add-todo">
            <input type="text" className='add-todo__input' 
            onChange={ getTodoInput } placeholder="Lägg till en todo" />
            <button className="add-todo__button" onClick={ handleClick }>Lägg till todo</button>
        </section>
    )
}

export default AddTodo;

// const inputElem = document.querySelector('input');

// inputElem.addEventListener('keyup', (event) => {
//     const inputValue = event.target.value;
// });
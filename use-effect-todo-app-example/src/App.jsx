import './App.css'
import { useState, useEffect } from 'react'

import TodoItem from './components/TodoItem/TodoItem'
import AddTodo from './components/AddTodo/AddTodo'

function App() {
  const [todos, setTodos] = useState([]);

  const todoComponents = todos.map((todo) => {
    return <TodoItem todo={ todo.todo } done={ todo.completed } key={ todo.id } />
  });

  // useEffect(() => {
  //   console.log('State uppdateras med ny todo');
  // }); // Denna useEffect körs varje gång något state i denna komponent uppdateras

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();
  
      setTodos(data.todos);
    }

    getTodos();
  }, []); // Kör bara denna useEffect en gång och inte mer

  // Denna funktion används för att manipulera våran todos-array ovan
  function addNewTodo(todoFromInput) {
    //console.log(`Todo text from inputfield: ${todoFromInput}`);

    const newTodo = {
      id: todos.length + 1,
      todo: todoFromInput,
      completed: false
    }

    const tempTodosArray = [...todos];
    tempTodosArray.push(newTodo);

    setTodos(tempTodosArray);
  }


  return (
    <div className="App">
      <ul className='todos'>
        { todoComponents }
      </ul>
      <AddTodo addNewTodo={ addNewTodo } />
    </div>
  )
}

export default App

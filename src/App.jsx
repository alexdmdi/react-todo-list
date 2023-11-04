/*eslint-disable react/prop-types*/
import { useState, useEffect} from 'react';
import './App.css'
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {

const [todos, setTodos] = useState([]);
  
  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [ ...currentTodos, {id: crypto.randomUUID(), title: newItem, checked: false} ] 
    });
  }

  useEffect(() => {
    console.log(todos);
  })

  //for the form component, has a prop called 'whenSubmit' that passes the addTodo function to it
  return (
    <>
      <h1 className="title">To-Do List</h1>
      <Form onSubmit={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      
    </>
  )


}

export default App

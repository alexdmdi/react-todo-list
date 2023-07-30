/*eslint-disable react/prop-types*/

//recieves and destructures todos (array), and setTodos (function) from app.jsx
export function TodoList ({todos, setTodos}) {

    function toggleCheckbox (id, checked) {
        setTodos(currentTodos => {
          return currentTodos.map(todo => {
            if (todo.id === id){
              return {...todo, checked: checked}
            }
            return todo;
          })
        })
      }

    function deleteTodo(id){
        setTodos( currentTodos => {
          return currentTodos.filter(todo => todo.id !== id)
        })
    
      }

    return (
        <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleCheckbox(todo.id, e.target.checked)}/>
                {todo.title}
                </label>
              <button className="delete-button" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li> 
          )
          
        })}
      </ul>
    )


}

export default TodoList;


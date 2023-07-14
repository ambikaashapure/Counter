import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
 

  const handleInputChange = event => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
   if(newTodo){
    const newTodoItem={
      id: todos.length+1,
      text:newTodo
    };
    setTodos([...todos,newTodoItem]);
    setNewTodo('')
   }
  };

  const handleDeleteTodo = id => {
    setTodos(prevtodo => prevtodo.filter(oldtodo => oldtodo.id !=id));
  };

 

  const handleCheckboxEvent =id=>{
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleClear = () => {
    setTodos([]);
  };

  return (
    <div className='app'>
      <div className='container'>
        <h2>Tell me what you want to do today?</h2>
        <div className='container2'>
          <input className='input_items'
            type="text" value={newTodo} onChange={handleInputChange} placeholder="Enter new todo item" />
          <button className='addbtn' onClick={handleAddTodo}>Add Todo</button>
        
        <ol>

          {todos.map(todo => (
            <li >
              <input type="checkbox" checked={todo.completed}  onChange={()=>handleCheckboxEvent(todo.id)} />{todo.text}
              <span>{todo.completed ? '     Done' : '    Incomplete'}</span>
              <button className='deletebtn' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ol>
       
        <button className='addbtn' onClick={handleClear}>clear</button>
          </div>
      </div>
    </div>
  );
};

export default App;

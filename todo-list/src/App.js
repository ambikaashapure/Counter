import React, { useState } from 'react';
import './App.css';
import TodoList from './pages/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editModeId, setEditModeId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleInputChange = event => {
    setNewTodo(event.target.value);
  };

  const handleEditInputChange = event =>{
    setEditedText(event.target.value);
  }

  const handleAddTodo = () => {
    if (newTodo) {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        completed: false
      };
      setTodos([...todos, newTodoItem]);
      
      setNewTodo('');
    }
  };

  const handleDeleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = id => {
    setTodos(prevTodos =>prevTodos.map(todo =>todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEditTodo = id => {
    const todoToEdit = todos.find(todo => todo.id === id);
    if (todoToEdit) {
      setEditModeId(id);
      setEditedText(todoToEdit.text);
    }
  };

  const handleSaveEditTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: editedText } : todo
    );
    setTodos(updatedTodos);
    setEditModeId(null);
    setEditedText('');
  };

  const handleCancelEditTodo = () => {
    setEditModeId(null);
    setEditedText('');
  };

  const handleClear = () => {
    setTodos([]);
  };

  

  return (
    <>
      <TodoList
        todos={todos}
        newTodo={newTodo}
        handleInputChange={handleInputChange}
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleTodo={handleToggleTodo}
        handleEditTodo={handleEditTodo}
        handleSaveEditTodo={handleSaveEditTodo}
        handleCancelEditTodo={handleCancelEditTodo}
        editModeId={editModeId}
        edtiedText={editedText}
        handleClear={handleClear}
        handleEditInputChange= {handleEditInputChange}
       />
       </>
 
  );
};

export default App;

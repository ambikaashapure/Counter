import React from 'react'

const TodoList = ({ 
    todos,
    newTodo,
    editModeId,
    editedText,
    handleInputChange,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
    handleEditTodo,
    handleSaveEditTodo,
    handleCancelEditTodo,
    handleClear,
    handleEditInputChange,

}) =>{
    const completedTasks = todos.filter(todo => todo.completed);


  return (
   <>
   
    <div className='app'>
      <div className='container'>
        <h2>Tell me what you want to do today?</h2>
        <div className='container2'>
          <input
            className='input_items'
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter new todo item"
          />
          <button className="button button-tertiary" onClick={handleAddTodo}>
            Add Todo
          </button>

          <ol>
            {todos.map(todo => (
              <li key={todo.id}>
              
                {editModeId === todo.id ? (
                  <>
                    <input type="text" className='listItems'value={editedText} 
                    onChange={e => handleEditInputChange(e.target.value)}
                       />
                    <button className="button button-primarysave" onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
                    
                    <button className="button button-secondarydelete" onClick={handleCancelEditTodo} >Cancel</button>
                  
                 </>
                ) : (
                  <>
                    <inpu type="checkbox"checked={todo.completed} onChange={() => handleToggleTodo(todo.id)}/>
                    
                      {todo.text}
                    <span className='status' >{todo.completed ? 'Completed' : ' Incomplete'}
                    </span>
                    <button  className="button button-secondary" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    <button className="button button-tertiaryedit" onClick={() => handleEditTodo(todo.id)}>Edit</button>
                  </>

                )}
              </li>
            ))}
          </ol>

          <button className="button button-primary" onClick={handleClear}>Clear</button>
          
        </div>
      </div>
      <div className='completed-tasks-box'>
       
          <h2>Completed Tasks</h2>
         
          {completedTasks.length > 0 ? (
            <ul>
              {completedTasks.map(todo => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          ) : (
            <p>No completed tasks yet.</p>
            )}
            </div>
          
         
        </div>
   </>
  )
          };
export default TodoList;

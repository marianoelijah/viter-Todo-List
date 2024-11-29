import React, { useState } from 'react';
import TodoForm from './TodoForm';

  return (
    <section className='min-h-screen bg-gray-800 flex justify-center items-center text-white'>
      <div className='max-w-[400px] w-full bg-blue-300 rounded-md p-4 h-[500px]'>
        <h2>MY TODO LIST</h2>
      <form action="" className='text-black  pb-4'>
          <label htmlFor="" className='block'> My Todo List
            <input type="text" placeholder='' className='w-[350px] h-[50px] border outline-none '/>
          </label>

          <label htmlFor="" className='block'> Bucketlist
            <input type="text" placeholder='Add To Do' className='w-[350px] h-[50px] border outline-none text-center items-center'/>
          </label>
        </form>
      
      <div className="todo-list">
        <button onClick={handleAddTodo}>
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              
            </li>
          ))}
        </ul>
        
      </div>
      <TodoListt />
      <TodoForm />
      </div>
    </section>
  );

export default TodoListt;
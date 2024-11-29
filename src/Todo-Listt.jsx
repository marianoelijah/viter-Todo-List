import React, { useState } from 'react';

function TodoListt() {
  const [todos, setTodos] = useState([
    { text: 'Take out the trash', time: '9:00 AM', completed: false },
    { text: 'Do homework', time: '12:00 PM', completed: true },
    { text: 'Go to grocery store', time: '1:00 PM', completed: false },
    { text: 'Run 5 kilometers', time: '4:20 PM', completed: false },
    { text: 'Load the dishwasher', time: '9:00 PM', completed: false },
    { text: 'Take out the trash', time: '9:00 AM', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleTimeChange = (event) => {
    setNewTime(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, time: newTime, completed: false }]);
      setNewTodo('');
      setNewTime('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <p>Friday Nov 29 2024 1:06:15 PM</p>
      <div className="calendar-header">
        <div>s</div>
        <div>m</div>
        <div>t</div>
        <div>w</div>
        <div>t</div>
        <div>f</div>
        <div>s</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
      </div>
      <div className="todo-list">
        <input
          type="text"
          placeholder="Add a todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Add a time"
          value={newTime}
          onChange={handleTimeChange}
        />
        <button onClick={handleAddTodo}>Add To Do</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <span>{todo.text}</span>
              <span>{todo.time}</span>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListt;
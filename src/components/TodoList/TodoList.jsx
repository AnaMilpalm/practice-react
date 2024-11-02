import todosData from '../../assets/todos.json';
import { useState } from 'react';
import s from './TodoList.module.css';
import {TodoItem} from '../TodoItem/TodoItem';
import { nanoid } from 'nanoid';

const TodoList = () => {
     const [todos, setTodos] = useState(todosData);
     const [newValue, setNewValue] = useState('');

     const handleDeleteTodo = (id) => {
        setTodos(prev => prev.filter(item => item.id !== id));
     };
     const handleAddTodo = () => {
        const newTodo = {
            id: nanoid(),
            todo: newValue,
            completed: false
        };
        setTodos(prev => [...prev, newTodo]);
     }

    return (
        <>
        <div className={s.flex}>
            <input value={newValue} onChange={e => setNewValue(e.target.value)} className={s.input} />
            <button onClick={handleAddTodo} className='btn border'>Add</button>

        </div>
        <ul className={s.list}>
            {todos.map(item => (
                <TodoItem key={item.id} {...item} handleDeleteTodo={handleDeleteTodo} />
            ))}
        </ul>
        </>
    )
}

export default TodoList;
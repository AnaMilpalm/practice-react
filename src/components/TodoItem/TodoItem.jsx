import s from '../TodoList/TodoList.module.css';
export const TodoItem = ({id, completed, todo, handleDeleteTodo }) => {
    return (
        
    <li className={s.item}>
        <input type="checkbox" />
        <span>{todo}</span>
        <span>{completed}</span>
        <button onClick={() => handleDeleteTodo(id)} className='btn border'>Delete</button>
    </li>
  
)
};

        


    
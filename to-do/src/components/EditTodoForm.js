import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        editTodo(value, task.id);
        setValue("");
    }


    return(
        <form className='TodoForm' onSubmit={handleSubmit}> 
            <input 
                type='text' 
                className='todo-input' 
                placeholder='Update task' 
                onChange={
                    (e) => 
                    setValue(e.target.value)} 
                value = {value}
            /> 

            <button 
                className='todo-btn' 
                type='submit'
            >
                Update task
            </button>
        </form>
    )
}
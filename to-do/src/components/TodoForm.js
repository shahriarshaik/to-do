import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        addTodo(value);
        setValue("");
    }


    return(
        <form className='TodoForm' onSubmit={handleSubmit}> 
            <input type='text' className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} value = {value}/> 
            <button className='todo-btn' type='submit'> Add task</button>
        </form>
    )
}
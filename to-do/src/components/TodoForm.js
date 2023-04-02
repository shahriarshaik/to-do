import React, {useState} from 'react';

export const TodoForm = () => {
        const [Value, setValue] = useState("");
    return(
        <form className='TodoForm'> 
            <input type='text' className='todo-input' placeholder='What is the task today?' onChange={(e) => console.log(e.target.value)}/> 
            <button className='todo-button' type='submit'> Add task</button>
        </form>
    )
}
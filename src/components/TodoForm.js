import { Button, TextField} from "@material-ui/core";
import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
        }

        setTodo({ ...todo, task: "" }); // Reset input
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField label="Task" name="task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
            <Button type="submit">Save</Button>
        </form>
    );
}

export default TodoForm;

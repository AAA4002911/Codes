import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import "../styles/TodoList.css";

export default function TodoList() {
    const [data, setData] = useState([]);
    const [user_input, setInput] = useState("");
    const [isEditing, setEditing] = useState(false);
    const [edit_index, setindex] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user_input === "") return console.log("Can't add an empty todo");
        setData([...data, user_input]);
        setInput("");
    }
    const removeItem = (index) => {
        const newData = data.filter((ele, idx) => index != idx);
        setData(newData);
    }
    const editItem = (event) => {
        event.preventDefault();
        if (user_input === "") return console.log("Can't save an empty todo");
        const newData = data.map((ele, idx) => {
            if (edit_index === idx) {
                return ele = user_input;
            }
            return ele;
        });
        setData(newData);
        setEditing(false);
        setInput("")
    }
    return (
        <div id="container">
            <form className="todo">
                <h1>Todo List</h1>
                {isEditing ? (<textarea className="editTask" autoFocus value={user_input} onChange={(event) => { setInput(event.target.value) }}></textarea>
                ) : (<textarea name="input" id="task" autoFocus placeholder="Enter Here" value={user_input} onChange={(event) => { setInput(event.target.value) }}></textarea>
                )}
                {isEditing ? <button className="saveTask" onClick={editItem}>Save</button> : <button type="submit" id="btn" onClick={handleSubmit}>Add</button>}
            </form>
            <ol>
                {data.map((item, index) =>
                    <li className="list" key={index} task={data[index]}>
                        <div>{item}</div>
                        <button className="edit" onClick={() => { setEditing(true); setindex(index); setInput(data[index]) }}>Edit</button>
                        <button className="delete" onClick={() => removeItem(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}
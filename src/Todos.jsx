import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, setFilter, finish, remove } from "./store/todoapp.js";

export default function Todo() {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const handleAdd = () => {
        if (todo !== "") {
            dispatch(add(todo));
            setTodo("");
        } else return;
    };

    const handleFinish = (id) => {
        dispatch(finish(id));
    };

    const handleRemove = (id) => {
        dispatch(remove(id));
    };

    const onSubmit = (event) => {
        event.preventDefault();
    };

    const handleSetFilter = (filter) => {
        dispatch(setFilter(filter));
    };

    const todos = useSelector((state) => {
        const { items, filter } = state.todos;
        if (filter === "all") {
            return items;
        } else if (filter === "todo") {
            return items.filter((todo) => !todo.finish);
        } else if (filter === "finished") {
            return items.filter((todo) => todo.finish);
        }
        return items;
    });



    // const todos = useSelector((state) => state.todos);

    console.log(todos);

    return (
        <form action="" onSubmit={onSubmit}>
            <div style={{ width: "400px", margin: "auto" }}>
                <h2>Todo</h2>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button onClick={handleAdd} type="submit">
                        Add
                    </button>
                </div>
                <div>
                    <button onClick={() => handleSetFilter("all")}>All</button>
                    <button onClick={() => handleSetFilter("todo")}>Todo</button>
                    <button onClick={() => handleSetFilter("finished")}>Finished</button>
                </div>
                <div>
                    <ul style={{ listStyle: "none" }}>
                        {todos.map((todo) => {
                            return (
                                <li key={todo.id}>
                                    {todo.finish ? (
                                        <del>{todo.title}</del>
                                    ) : (
                                        todo.title
                                    )}
                                    {todo.finish ? (
                                        <button
                                            onClick={() => handleRemove(todo.id)}
                                            style={{ marginLeft: "20px" }}
                                        >
                                            Remove
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleFinish(todo.id)}
                                            style={{ marginLeft: "20px" }}
                                        >
                                            Finish
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </form>
    );
}
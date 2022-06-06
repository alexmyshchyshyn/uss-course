import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../todoSlice";

export const TodoControl = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setTodo(e.target.value);

  const onAddClick = () => {
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        todoValue: todo,
      })
    );
  };

  return (
    <div>
      <input type="text" value={todo} onChange={handleChange} />
      <button onClick={onAddClick}>Add todo</button>
    </div>
  );
};

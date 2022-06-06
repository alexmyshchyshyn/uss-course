import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../todoSlice";

export const TodoList = () => {
  const list = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const removeTodoFromList = (id) => () => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {list.map((todo) => (
        <div key={todo.id}>
          <span>{todo.todoValue}</span>
          <button onClick={removeTodoFromList(todo.id)}>Remove</button>
        </div>
      ))}
    </ul>
  );
};

import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const eneteredTodo = todoRef.current?.value;
    todosCtx.addTodo(eneteredTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;

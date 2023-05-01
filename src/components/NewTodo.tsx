import React, { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const eneteredTodo = todoRef.current?.value;
    props.onAddTodo(eneteredTodo);
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

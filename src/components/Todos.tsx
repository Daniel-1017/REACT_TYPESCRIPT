import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = props => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onClick={() => props.onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

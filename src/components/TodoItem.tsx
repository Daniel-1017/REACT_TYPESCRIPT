import React from "react";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onClick: () => void;
}> = props => {
  return <li onClick={() => props.onClick()}>{props.text}</li>;
};

export default TodoItem;

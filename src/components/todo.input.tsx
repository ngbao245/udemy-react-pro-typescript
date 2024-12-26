import React, { useState } from "react";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

interface IProps {
  name?: string;
  setListTodo: (value : ITodo[]) => void;
}

const TodoInput = (props: IProps) => {
  //   const { name = "Please type your todo... " } = props;
  const [todo, setTodo] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    console.log(todo);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 15,
        marginBottom: "20px",
      }}
    >
      <input type="text" value={todo} onChange={handleTextChange} />
      <button onClick={handleClick}>Add todo</button>
    </div>
  );
};

export default TodoInput;

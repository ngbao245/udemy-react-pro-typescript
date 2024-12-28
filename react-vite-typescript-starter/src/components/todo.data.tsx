interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDeveloper?: boolean;

  deleteTodo: (value: number) => void;
}

// type TProps = {
//   todos: {
//     id: number;
//     title: string;
//     isComplete: boolean;
//   }[];
//   owner: string;
//   age: number;
//   isDeveloper: boolean;
// };

const TodoData = (props: IProps) => {
  const { todos, owner = "Unknown", deleteTodo } = props;
  return (
    <div>
      {/* <div>Owner: {owner}</div> */}
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ padding: "10px 0" }}>
              {item.id} - {item.title}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;

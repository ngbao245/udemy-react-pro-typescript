interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  owner?: string;
  age?: number;
  isDeveloper?: boolean;
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
  const { todos, owner = "Unknown" } = props;
  return (
    <div>
      {/* <div>Owner: {owner}</div> */}
      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ padding: "10px 0" }}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;

import { data } from "../data";
import TodoItem from "./TodoItem";

const Todo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold text-3xl text-green-300">TODO MANAGER</h1>
      <input type="text" placeholder="Add a todo..." className="my-10 bg-white text-black w-[580px] p-3 rounded-lg outline-none" />
      <div className="flex justify-center items-center flex-col gap-5">
        {data.map((todo, index) => (
          <TodoItem name={todo.name} status={todo.status} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
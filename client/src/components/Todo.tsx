import { useMutation, useQuery } from "@apollo/client";
import { data } from "../data";
import TodoItem from "./TodoItem";
import { CREATE_TODO, DELETE_TODO } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/queries";

const Todo = () => {

  //Fetch Todos
  const { data: todoData, loading, error } = useQuery(GET_TODOS);
  console.log(todoData);

  //Create Todo - TBD
  const [createTodo] = useMutation(CREATE_TODO, {
    variables: { name: "", status: "" }
  });

  //Delete Todo - TBD
  const [deleteTodo] = useMutation(DELETE_TODO, {
    variables: { id: 1 }
  });

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
import { useDispatch } from "react-redux";
import {
  ToogleTodo,
  RemoveTodo,
  MarkCompleted,
  MarkIncomplete,
} from "../store/Action";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex text-xl flex-wrap justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          className="mr-2  bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(ToogleTodo(index))}
        >
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          className="mr-2  bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(RemoveTodo(index))}
        >
          <FaTrash />
        </button>
        {!todo.completed && (
          <button
            className=" bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(MarkCompleted(index))}
          >
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button
            className=" bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(MarkIncomplete(index))}
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;

import { useDispatch, useSelector } from "react-redux";
import { FilterTodos, MarkAllCompleted } from "../store/Action";

const FilletBtn = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);
  const handleFilter = (filter) => {
    dispatch(FilterTodos(filter));
  };
  return (
    <div className="flex flex-wrap gap-x-4 items-center">
      <select
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm p-3 border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incompleted</option>
      </select>
      <button
        onClick={() => dispatch(MarkAllCompleted(currentFilter))}
        className="text-sm p-3 rounded-md bg-purple-500 text-white"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilletBtn;

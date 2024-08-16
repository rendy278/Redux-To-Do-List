import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { useDispatch } from "react-redux";
import { AddTodo } from "../store/Action";
import { BsSearch } from "react-icons/bs";
import { updatedSearchTerm } from "../store/ActionTypes";
import FilletBtn from "./FilletBtn";

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNewTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(AddTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updatedSearchTerm(value));
  };

  return (
    <section className="w-full mx-auto p-4 bg-gray-200 rounded">
      <h1 className="p-3 text-2xl flex gap-3 items-center justify-center font-bold text-center text-purple-500">
        Redux To Do Apps <SiRedux />
      </h1>
      {/* Input Text & Button */}
      <div className="flex items-center mb-3 gap-4">
        <input
          type="text"
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add To Do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleAddNewTodo}
          className="p-3 hover:scale-95 duration-200 transition-all focus:outline-none bg-indigo-500 rounded-md text-white"
        >
          <BiPlus size={20} />
        </button>
      </div>
      {/* Filter & Search */}
      <div className="flex flex-wrap items-center mb-3 gap-4">
        <FilletBtn />
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search To Do"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={() => handleSearchChange(searchTerm)}
          className="p-3 hover:scale-95 duration-200 transition-all focus:outline-none bg-indigo-500 rounded-md text-white"
        >
          <BsSearch size={20} />
        </button>
      </div>
    </section>
  );
};

export default Todo;

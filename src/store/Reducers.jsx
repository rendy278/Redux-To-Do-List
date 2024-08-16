import {
  addTodo,
  toogleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  filterTodos,
  markAllCompleted,
  updatedSearchTerm,
} from "./ActionTypes";

const initialState = { todos: [], filter: "ALL", searchTerm: "" };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };

    case toogleTodo:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case removeTodo:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.id),
      };

    case markCompleted:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };

    case markIncomplete:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };

    case filterTodos:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case updatedSearchTerm:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };

    case markAllCompleted:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    default:
      return state;
  }
};

export default todoReducer;

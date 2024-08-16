import {
  addTodo,
  filterTodos,
  markAllCompleted,
  markIncomplete,
  removeTodo,
  toogleTodo,
  updatedSearchTerm,
} from "./ActionTypes";

export const AddTodo = (text) => ({
  type: addTodo,
  payload: { text },
});

export const ToogleTodo = (id) => ({
  type: toogleTodo,
  payload: { id },
});

export const RemoveTodo = (id) => ({
  type: removeTodo,
  payload: { id },
});

export const MarkCompleted = (id) => ({
  type: markAllCompleted,
  payload: { id },
});

export const MarkIncomplete = (id) => ({
  type: markIncomplete,
  payload: { id },
});

export const FilterTodos = (filter) => ({
  type: filterTodos,
  payload: { filter },
});

export const MarkAllCompleted = () => ({
  type: markAllCompleted,
});

export const UpdatedSearchTerm = (searchTerm) => ({
  type: updatedSearchTerm,
  payload: { searchTerm },
});

import { createStore, applyMiddleware } from "redux";
import todoReducer from "./Reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const saveToLocalStorage = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("todosState", JSON.stringify(state));
  return result;
};

const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem("todosState");
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (e) {
    console.error("Could not load state from local storage", e);
  }
  return undefined;
};

const persistedState = loadFromLocalStorage();

export const store = createStore(
  todoReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(saveToLocalStorage))
);

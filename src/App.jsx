import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <Todo />
      <TodoList />
    </main>
  );
};

export default App;

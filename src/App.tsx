import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

const App = () => {
  return (
    <TodosContextProvider>
      <div>
        <NewTodo />
        <Todos />
      </div>
    </TodosContextProvider>
  );
};

export default App;

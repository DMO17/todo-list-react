import "./App.css";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div>
      <Header title={"Todo-List"} todoListCounter={6} />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;

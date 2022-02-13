import "./App.css";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const mockTodos = [
    {
      id: "1",
      title: "Item 1",
      content: "This is item 1",
      dueDate: Date.now(),
    },
    {
      id: "2",
      title: "Item 2",
      content: "This is item 2",
      dueDate: Date.now(),
    },
    {
      id: "3",
      title: "Item 3",
      content: "This is item 3",
      dueDate: Date.now(),
    },
    {
      id: "4",
      title: "Item 4",
      content: "This is item 4",
      dueDate: Date.now(),
    },
  ];

  const formSubmission = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  const completedTodo = () => {
    console.log("onSubmit");
  };
  const deletedTodo = () => {
    console.log("onDelete");
  };

  return (
    <div>
      <Header title={"Todo-List"} todoListCounter={6} />
      <TodoForm onSubmit={formSubmission} />
      <TodoList
        listOfTodos={mockTodos}
        onComplete={completedTodo}
        onDelete={deletedTodo}
      />
    </div>
  );
}

export default App;

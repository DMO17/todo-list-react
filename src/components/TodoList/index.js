import { TodoCard } from "../TodoCard";

export const TodoList = ({ listOfTodos, onComplete, onDelete }) => {
  return (
    <section className="container d-flex flex-wrap justify-content-center">
      {listOfTodos.map((eachTodo) => (
        <TodoCard
          key={eachTodo.id}
          {...eachTodo}
          onComplete={onComplete}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
};

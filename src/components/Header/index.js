import "./Header.css";

export const Header = ({ title, todoListCounter }) => {
  return (
    <div className="jumbotron text-center">
      <h1 className="display-4">{title}</h1>
      {!todoListCounter ? (
        <p className="lead">You have No items in your todoList</p>
      ) : (
        <p className="lead">You have a total todoList of {todoListCounter}</p>
      )}
    </div>
  );
};

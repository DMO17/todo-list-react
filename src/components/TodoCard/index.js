import "./TodoCard.css";

export const TodoCard = ({ title, dueDate, onComplete, onDelete }) => {
  return (
    <div className="card todo-card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Due Date: {dueDate}</h6>
        {/* <p className="card-text">{content}</p> */}
        <button onClick={onComplete} className="btn btn-success">
          Complete
        </button>
        <button onClick={onDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

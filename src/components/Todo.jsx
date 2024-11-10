function Todo(props) {
  return (
    <li>
      <div className="c-cb">
        <input type="checkbox" id={props.id} defaultChecked={props.completed} />
        <label htmlFor="" className="todo-label">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;

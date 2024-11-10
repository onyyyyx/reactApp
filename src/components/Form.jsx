function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="" className="label__lg">
          What needs to be done ?
        </label>
      </h2>
      <input
        type="text"
        name="text"
        id="new-todo-input"
        className="input input__lg"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary">
        Add
      </button>
    </form>
  );
}

export default Form;
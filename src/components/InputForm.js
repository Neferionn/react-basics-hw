import { useState } from "react";

const InputForm = ({ addItem }) => {
  const [value, setValue] = useState("");

  const getInput = (e) => {
    setValue(e.target.value);
  };

  const handleInput = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <form className="border" onSubmit={handleInput}>
      <div className="input-group p-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={getInput}
        />
        <button
          type="submit"
          onClick={handleInput}
          className="btn btn-outline-primary"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default InputForm;

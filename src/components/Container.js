import { useState } from "react";
import InputForm from "./InputForm";
import Itemlist from "./Itemlist";

const Container = () => {
  const [todos, setTodos] = useState([]);

  const addItem = (item) => {
    const list = [...todos, { item }];
    setTodos(list);
  };

  const deleteItem = (idx) => {
    const list = [...todos];
    list.splice(idx, 1);
    setTodos(list);
  };

  return (
    <div className="fluid-container d-flex justify-content-center row gx-0 mb-5">
      <div className="mt-5 col-sm-12 col-md-6 col-lg-4 mx-auto">
        <h1 className="text-center display-3 pb-2 text-info">ToDo List</h1>

        <InputForm addItem={addItem} />
        <Itemlist todos={todos} deleteItem={deleteItem} />
      </div>
    </div>
  );
};
export default Container;

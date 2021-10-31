import Item from "./Item";

const Itemlist = ({ todos, deleteItem }) => {
  return (
    <ul className="list-group">
      {todos.map((item, idx) => (
        <Item key={idx} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};
export default Itemlist;

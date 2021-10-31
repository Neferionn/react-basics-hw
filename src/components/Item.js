const Item = ({ item, idx, deleteItem }) => {
  const removeItem = () => {
    deleteItem(idx);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.item}
      <button
        className="btn btn-outline-danger"
        type="button"
        onClick={removeItem}
      >
        Delete
      </button>
    </li>
  );
};

export default Item;

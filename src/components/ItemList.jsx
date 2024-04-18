const ItemList = ({ items, handleToggleItem, handleDeleteItem }) => {
  return (
    <ul className="item-list">
      {items.length === 0 ? (
        <EmptyView />
      ) : (
        items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onToggleItem={handleToggleItem}
              onDeleteItem={handleDeleteItem}
            />
          );
        })
      )}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onToggleItem, onleDeleteItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const EmptyView = () => {
  return (
    <section className="empty-state">
      <h3>Empty Packing List</h3>
      <p>Start by adding some items you absolutely don't want to forget</p>
    </section>
  );
};

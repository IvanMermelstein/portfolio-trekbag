import { useMemo, useState } from "react";
import Select from "react-select";
import { sortingOptions } from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore";
// import { useItemsContext } from "../lib/hooks";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("default");
  // const { items, handleDeleteItem, handleToggleItem } = useItemsContext();
  const items = useItemsStore((state) => state.items);
  const handleDeleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onToggleItem={toggleItem}
            onDeleteItem={handleDeleteItem}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;

const Item = ({ item, onToggleItem, onDeleteItem }) => {
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
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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

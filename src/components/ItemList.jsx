import { useState } from "react";
import Select from "react-select";
import { sortingOptions } from "../lib/constants";

const ItemList = ({ items, handleToggleItem, handleDeleteItem }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

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
            onToggleItem={handleToggleItem}
            onDeleteItem={handleDeleteItem}
          />
        );
      })}
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

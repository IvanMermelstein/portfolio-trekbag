import { useState, useRef } from "react";
import { secondaryButtons } from "../lib/constants";

const Sidebar = ({ onAddItem }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleOnSubmit}>
        <h2>Add an item</h2>
        <input
          type="text"
          value={itemText}
          onChange={(e) => {
            setItemText(e.target.value);
          }}
          ref={inputRef}
          autoFocus
          placeholder="toothbrush"
        />
        <ActionButton className="btn">Add to list</ActionButton>
      </form>
      <section className="button-group">
        {secondaryButtons.map((label) => {
          return (
            <ActionButton key={label} type={"secondary"}>
              {label}
            </ActionButton>
          );
        })}
      </section>
    </div>
  );
};

const ActionButton = ({ type, children }) => {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
};

export default Sidebar;

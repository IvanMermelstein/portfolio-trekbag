import { useState, useRef } from "react";
import { useItemsContext } from "../lib/hooks";

const Sidebar = () => {
  const {
    handleAddItem,
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    inputRef.current.focus();

    if (!itemText) {
      alert("Item can't be empty");
      return;
    }

    handleAddItem(itemText);
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
        <ActionButton>Add to list</ActionButton>
      </form>
      <section className="button-group">
        {secondaryButtons.map(({ text, onClick }) => {
          return (
            <ActionButton key={text} onClick={onClick}>
              {text}
            </ActionButton>
          );
        })}
      </section>
    </div>
  );
};

const ActionButton = ({ buttonType, children, onClick }) => {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Sidebar;

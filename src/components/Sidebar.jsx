const Sidebar = () => {
  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to inital",
    "Remove all items",
  ];

  return (
    <div className="sidebar">
      <form>
        <h2>Add an item</h2>
        <input type="text" />
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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <form>
        <h2>Add an item</h2>
        <input type="text" />
        <ActionButton className="btn">Add to list</ActionButton>
      </form>
      <section className="button-group">
        <ActionButton type={"secondary"}>Mark all as complete</ActionButton>
        <ActionButton type={"secondary"}>Mark all as incomplete</ActionButton>
        <ActionButton type={"secondary"}>Reset to inital</ActionButton>
        <ActionButton type={"secondary"}>Remove all items</ActionButton>
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

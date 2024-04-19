import { useItemsContext } from "../lib/hooks";

const Header = () => {
  const { items } = useItemsContext();
  const numberOfItemsPacked = items.filter((item) => item.packed).length;
  const totalNumberOfItems = items.length;

  return (
    <header>
      <img src={"./dots.png"} />
      <section className="counter">
        {totalNumberOfItems > 0 ? (
          <p>
            <b> {numberOfItemsPacked}</b> / {totalNumberOfItems}
          </p>
        ) : (
          <b>No</b>
        )}
        items packed
      </section>
    </header>
  );
};

export default Header;

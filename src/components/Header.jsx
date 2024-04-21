// import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

const Header = () => {
  // const { items } = useItemsContext();
  const items = useItemsStore((state) => state.items);

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

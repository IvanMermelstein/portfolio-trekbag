const Header = ({ numberOfItemsPacked, totalNumberOfItems }) => {
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

import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { initialItems } from "./lib/constants";

const App = () => {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemName) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemName,
      packed: false,
    };

    setItems([...items, newItem]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar onAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
};

export default App;

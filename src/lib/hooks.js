import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context)
    throw new Error(
      "useItemsContext must be used withing a ItemsContextProvider"
    );

  return context;
};

export { useItemsContext };

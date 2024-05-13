// ============================ Context ========================

import { createContext } from "react";

export const ProduitContext = () => {
  return createContext<{
    Produit: Array<object>;
    setProduit: (value: Array<object>) => void;
  }>({
    Produit: [],
    setProduit: () => null,
  });
};

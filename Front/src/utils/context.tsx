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

export const TotalContext = () => {
  return createContext<{
    Total: Number;
    setTotal: (value: Number) => void;
  }>({
    Total: 0,
    setTotal: () => null,
  });
};

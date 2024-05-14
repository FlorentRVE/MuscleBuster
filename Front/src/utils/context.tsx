// ============================ Context ========================

import { createContext } from "react";
import Produit from "../models/produit";

export const ProduitContext = () => {
  return createContext<{
    Produit: Array<Produit>;
    setProduit: (value: Array<Produit>) => void;
  }>({
    Produit: [],
    setProduit: () => null,
  });
};

export const TotalContext = () => {
  return createContext<{
    Total: number;
    setTotal: (value: number) => void;
  }>({
    Total: 0,
    setTotal: () => null,
  });
};

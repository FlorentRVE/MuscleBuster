import { RouterProvider } from 'react-router-dom';
import router from './router';
import * as context from "./utils/context";
import { useState } from 'react';
import Produit from './models/produit';

export const ProduitContext = context.ProduitContext();
export const TotalContext = context.TotalContext();

function App() {

  const [Produit, setProduit] = useState<Produit[]>([]);
  const [Total, setTotal] = useState<number>(0);

  return (
    <TotalContext.Provider value={{ Total, setTotal}}>
      <ProduitContext.Provider value={{ Produit, setProduit }}>
        <>
          <RouterProvider router={router} />
        </>
      </ProduitContext.Provider>
    </TotalContext.Provider>
  );
  
}

export default App

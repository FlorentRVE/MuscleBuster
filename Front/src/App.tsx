import { RouterProvider } from 'react-router-dom';
import router from './router';
import * as context from "./utils/context";
import { useState } from 'react';

export const ProduitContext = context.ProduitContext();

function App() {

  const [Produit, setProduit] = useState<object[]>([]);

  return (
    <ProduitContext.Provider value={{ Produit, setProduit }}>
      <>
        <RouterProvider router={router} />
      </>
    </ProduitContext.Provider>
  );
  
}

export default App

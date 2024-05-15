let API_URL = "https://127.0.0.1:8000";

export const getProduits = async () => {
  const response = await fetch(API_URL + "/produit/all").then((resp) =>
    resp.json()
  );
  return response;
};

export const postPaiement = async (data: any) => {
  const response = await fetch(API_URL + "/commande/new", {
    method: "POST",
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
  return response;
};

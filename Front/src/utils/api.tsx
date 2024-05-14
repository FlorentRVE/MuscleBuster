let API_URL = "http://localhost:3000";

export const getProduits = async () => {
    const response = await fetch(API_URL + "/produit").then((resp) =>
    resp.json());
    return response;
}

export const postPaiement = async (data: any) => {
    const response = await fetch(API_URL + "/paiement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
    return response;
}
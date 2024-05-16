let API_URL = "https://localhost:8000";

export const getProduits = async () => {
  const response = await fetch(API_URL + "/produit/all").then((resp) =>
    resp.json()
  );
  return response;
};

export const postPaiement = async (data: any) => {
  try {

    const response = await fetch(API_URL + "/create-checkout-session", {
      method: "POST",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => resp.json());
    return response;
  } catch (error) {
    console.log(error);
  }
};

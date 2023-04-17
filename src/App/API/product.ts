import client from "./client";

export async function getProducts() {
  return client({
    method: "GET",
    url: "/products",
  });
}

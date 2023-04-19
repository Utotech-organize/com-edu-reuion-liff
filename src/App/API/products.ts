import client from "./client";

export async function getAllProduct() {
  return client({
    method: "GET",
    url: "/products",
  });
}

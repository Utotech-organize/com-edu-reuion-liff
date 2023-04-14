import client from "./client";

export async function createCustomers(data: any) {
  return client({
    method: "POST",
    url: "/customers/new",
    data,
  });
}

export async function getCustomerWithLiffID(userID: any) {
  const headers = {
    ["token"]: userID,
  };
  return client({
    method: "GET",
    url: `/customers/liff`,
    headers,
  });
}

export async function updateCustomer(data: any) {
  return client({
    method: "PUT",
    url: `/customers/edit/${data.id}`,
    data,
  });
}

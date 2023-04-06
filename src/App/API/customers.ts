import client from "./client";

export async function createCustomers(data: any) {
  return client({
    method: "POST",
    url: "/customers/new",
    data,
  });
}

export async function getCustomerWithLiffID(data: any) {
  return client({
    method: "GET",
    url: `/customers/0?line_liff_id=${data}`,
  });
}

export async function updateCustomer(data: any) {
  console.log("==========================");

  console.log(data);

  return client({
    method: "PUT",
    url: `/customers/edit/${data.id}`,
    data,
  });
}

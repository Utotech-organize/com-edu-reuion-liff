import client from "./client";

export async function createOrder(data: any) {
  return client({
    method: "POST",
    url: `/orders/new`,
    data,
  });
}

export async function ordersWithLiff(liff: any) {
  const headers = {
    token: liff,
  };

  return client({
    method: "GET",
    url: `/orders/liff`,
    headers,
  });
}

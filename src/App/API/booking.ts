import client from "./client";

export async function createBooking(data: any) {
  return client({
    method: "POST",
    url: `/bookings/new`,
    data,
  });
}

export async function getBooking(id: any) {
  return client({
    method: "GET",
    url: `/bookings/${id}`,
  });
}

export async function getAllBooking(id: any) {
  return client({
    method: "GET",
    url: `/bookings/customer/${id}`,
  });
}

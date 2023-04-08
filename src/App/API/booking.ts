import client from "./client";

export async function createBooking(data: any) {
  return client({
    method: "POST",
    url: `/bookings/new`,
    data,
  });
}

import client from "./client";

export async function getDeskAll() {
  return client({
    method: "GET",
    url: "/desks",
  });
}

export async function getBookingWithTicket(slug: any) {
  return client({
    method: "GET",
    url: `/bookings/ticket/${slug}`,
  });
}

import client from "./client";

export async function getDesks() {
  return client({
    method: "GET",
    url: "/bookings/desks",
  });
}

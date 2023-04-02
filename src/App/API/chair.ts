import client from "./client";

export async function getChairWithDeskID(deskId: any) {
  return client({
    method: "GET",
    url: `/bookings/chairs/desk/${deskId}`,
  });
}

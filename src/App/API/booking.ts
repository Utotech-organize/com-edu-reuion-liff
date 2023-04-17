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
  const headers = {
    ["token"]: id,
  };
  return client({
    method: "GET",
    url: `/bookings/liff`,
    headers,
  });
}

export async function getTicket(param: any) {
  console.log(param);

  const headers = {
    ["line_liff_id"]: param.line_liff_id,
    ["ticket"]: param.ticket,
    ["line_display_name"]: param.line_display_name,
    ["line_photo_url"]: param.line_photo_url,
  };
  console.log(headers);

  return client({
    method: "GET",
    url: `/bookings/ticket`,
    headers,
  });
}

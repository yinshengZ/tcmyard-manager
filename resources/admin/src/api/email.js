import request from "@/utils/request";

export function sendEmail() {
  return request({
    url: "/send_email",
    method: "get",
  });
}

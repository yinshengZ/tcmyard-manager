import request from "@/utils/request";

export function getPatientFiles(id) {
  return request({
    url: "/file/" + id,
    method: "get",
  });
}

export function updatePatientFile(data){
  return request({
    url:"/file",
    method:"put",
    data
  })
}

export function deletePatientFile(id) {
  return request({
    url: "/file/" + id,
    method: "delete",
  });
}

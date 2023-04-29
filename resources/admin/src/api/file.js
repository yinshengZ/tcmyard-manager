import request from "@/utils/request";

export function getPatientFiles(id) {
  return request({
    url: "/file/patient/" + id,
    method: "get",
  });
}

export function getPatientFile(id){
  return request({
    url:'/file/'+id,
    method:'get',
  })
}



export function updateFile(data){
  return request({
      url:'/file',
      method:'patch',
      data
  })
}


export function deletePatientFile(id) {
  return request({
    url: "/file/" + id,
    method: "delete",
  });
}

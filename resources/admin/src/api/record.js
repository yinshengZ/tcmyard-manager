import request from '@/utils/request'


export function getAllRecords(){
  return request({
    url:'/record',
    method:'get'
  })
}

export function getSingleRecord(id){
  return request({
    url:'/record/'+id,
    method:'get',
  })
}

export function getPatientRecords(id){
  return request({
    url:'/record/search/'+id,
    method:'get',
  })
}


export function addRecord(data) {
  return request({
    url: '/record',
    method: 'post',
    data
  })
}

export function updateRecord(data,id){
  return request({
    url:'/record/'+id,
    method:'put',
    data
  })
}

export function deleteRecord(id){
  return request({
    url:'/record/'+id,
    method:'delete'  
  })
}


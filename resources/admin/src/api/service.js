import request from '@/utils/request'

export function getAllServices(){
    return request({
        url:'/service',
        method:'get'
    })
}

export function getSingleService(id){
    return request({
        url:'/service/'+id, 
        method:'get'
    })
}

export function addService(data){
    return request({
        url:'/service',
        method:'post',
        data
    })
}

export function updateService(data,id){
    return request({
        url:'/service/'+id,
        method:'put',
        data
    })
}

export function deleteService(id){
    return request({
        url:'/service/'+id,
        method:'delete'
    })
}
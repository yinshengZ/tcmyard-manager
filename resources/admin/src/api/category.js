import request from '@/utils/request'

export function getAll(){
    return request({
        url:'/category',
        method:'get'
    })
}

export function getSingle(data){
    return request({
        url:'/category/'+data,
        method:'get'
       
    })
}

export function add_category(data){
    return request({
        url:'/category',
        method:'post',
        data
    })
}

export function updateCategory(data,id){
    return request({
        url:'/category/'+id,
        method:'put',
        data
    })
}



import request from '@/utils/request'


export function getDiseases(){
    return request({
        url:'/disease',
        method:'get'
    })
}

export function addDisease(data){
    return request({
        url:'/disease',
        method:'post',
        data
    })
}

export function updateDisease(data,id){
    return request({
        url:'/disease/'+id,
        method:'put',
        data
    })
}

export function deleteDisease(id){
    return request({
        url:'/disease/'+id,
        method:'delete'
        
    })
}


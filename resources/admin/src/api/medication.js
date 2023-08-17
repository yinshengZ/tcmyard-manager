import request from '@/utils/request'


export function getMedications(){
    return request({
        url:'/medication',
        method:'get'
    })
}

export function addMedication(data){
    return request({
        url:'/medication',
        method:'post',
        data
    })
}

export function updateMedication(data,id){
    return request({
        url:'/medication/'+id,
        method:'put',
        data
    })
}

export function deleteMedication(id){
    return request({
        url:'/medication/'+id,
        method:'delete',
        id
    })
}


import request from '@/utils/request'

export function getSingleTreatment(id){
    return request({
        url:'/treatment/'+id,
        method:'get',
    })
}

export function getPatientTreatments(id){
    return request({
        url:'/treatment/patient/'+id,
        method:'get'
    })
}

export function addTreatment(data){
    return request({
        url:'/treatment',
        method:'post',
        data
    })
}

export function addHerbalPackages(data){
    return request({
        url:'/treatment/herb',
        method:'post',
        data
    })
}

export function addServices(data){
    return request({
        url:'/treatment/service',
        method:'post',
        data
    })
}

export function addRetail(data){
    return request({
        url:'/treatment/retail',
        method:'post',
        data
    })
}

export function addOther(data){
    return request({
        url:'/treatment/other',
        method:'post',
        data
    })
}

export function update_service(data){
    return request({
        url:'/treatment/service',
        method:'put',
        data
    })
}

export function updateHerbs(data){
    return request({
        url:'/treatment/herb',
        method:'put',
        data
    })
}

export function updateRetails(data){
    return request({
        url:'/treatment/retail',
        method:'put',
        data
    })
}

export function deleteTreatment(data){
    return request({
        url:'/treatment/'+data,
        method:'delete',
        
    })
}


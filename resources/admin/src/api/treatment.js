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


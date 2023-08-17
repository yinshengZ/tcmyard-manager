import request from '@/utils/request'


export function getSymptoms(){
    return request({
        url:'/symptom',
        method:'get'
    })
}
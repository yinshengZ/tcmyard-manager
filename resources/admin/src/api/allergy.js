import request from '@/utils/request'


export function getAllergies(){
    return request({
        url:'/allergy',
        method:'get',

    })
}
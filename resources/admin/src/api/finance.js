import request from '@/utils/request'

export function getAllIncomes(){
    return request({
        url:'/income',
        method:'get'
    })
}

export function addIncome(data){
    return request({
        url:'/income',
        method:'post',
        data
    })
}

export function addServiceIncome(data){
    return request({
        url:'/income/service',
        method:'post',
        data
    })
}

export function addIncomeType(data){
    return request({
        url:'/income_type',
        method:'post',
        data
    })
}

export function getAllIncomeTypes(){
    return request({
        url:'/income_type',
        method:'get'
    })
}

export function getSingleIncomeTypeDetails(id){
    return request({
        url:'/income_type/'+id,
        method:'get'
    })
}

export function updateIncomeTypeDetails(data,id){
    return request({
        url:'/income_type/'+id,
        method:'put',
        data
    })
}

export function deleteIncomeType(id){
    return request({
        url:'/income_type/'+id,
        method:'delete'
    })
}
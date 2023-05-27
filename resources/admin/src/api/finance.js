import request from '@/utils/request'


export function getCurrentYearIncomes(){
    return request({
        url:'/finance/income/year',
        method:'get'
    })
}

export function getCurrentMonthIncomes(){
    return request({
        url:'/finance/income/month',
        method:'get'
    })
}

export function getCurrentWeekIncomes(){
    return request({
        url:'/finance/income/week',
        method:'get'
    })
}

export function getCurrentDayIncomes(){
    return request({
        url:'/finance/income/today',
        method:'get'
    })
}


export function getAllIncomes(){
    return request({
        url:'/finance/income',
        method:'get'
    })
}

export function getPatientIncome(id){
    return request({
        url:'/finance/income/patient/'+id,
        method:'get'
    })
}

export function addPatientIncome(data){
    return request({
        url:'/finance/income/patient',
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


//Payment methods down

export function getPaymentMethods(){
    return request({
        url:'/payment_methods',
        method:'get',
    })
}
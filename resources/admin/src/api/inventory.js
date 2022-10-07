import request from '@/utils/request'

export function add_item(data){
    return request({
        url:'/inventory',
        method:'post',
        data
    })
}

export function delete_item(data){
    return request({
        url:'/inventory/'+data,
        method:'delete',        
    })
}

export function get_all(){
    return request({
        url:'/inventory',
        method:'get'
    })
}

export function get_single(data){
    return request({
        url:'/inventory/'+data,
        method:'get',
        
    })
}

export function get_herbs(){
    return request({
        url:'/inventory/herb',
        method:'get',
    })
}

export function get_services(){
    return request({
        url:'/inventory/service',
        method:'get',
    })
}

export function get_retails(){
    return request({
        url:'/inventory/retail',
        method:'get',
    })
}

export function get_others(){
    return request({
        url:'/inventory/other',
        method:'get',
    })
}

export function update_inventory(data,id){
    return request({
        url:'/inventory/'+id,
        method:'put',
        data
    })
}


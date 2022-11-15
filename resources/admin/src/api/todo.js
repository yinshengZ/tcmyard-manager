import request from '@/utils/request'
import { get } from 'sortablejs'

export function add_todo(data){
return request({
    url:'/todo',
    method:'post',
    data
})
}

export function get_todo(user_id){
    return request({
        url:'/todo/'+user_id,
        method:'get',
    })
}

export function update_todo_list(data){
    return request({
        url:'/todo',
        method:'put',
        data
    })
}

export function delete_todo_list(data){
    return request({
        url:'/todo/'+data,
        method:'delete',
        
    })
}
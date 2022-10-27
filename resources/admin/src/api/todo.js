import request from '@/utils/request'

export function add_todo(data){
return request({
    url:'/todo',
    method:'post',
    data
})
}
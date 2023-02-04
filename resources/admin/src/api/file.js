import request from '@/utils/request'


export function uploadFile(data){
    return request({
        url:'/file',
        method:'post',
        data
,    })
}
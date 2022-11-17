import dayjs from 'dayjs'


export function date_converter(date){
    return dayjs(date).format('DD/MM/YYYY')
}
import {request} from './request.js'

export function getmultidata(){
  return request({
    url:'/home/multidata'
  })
}
export function gethomedata(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
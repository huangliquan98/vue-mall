import axios from 'axios'

export function request(config,success,failure){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:3000
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {

  })
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    config.log(err)
  })

  return instance(config)
}

import request from '@/utils/request';


export const getUserInfo = (data: any) => request({ url: '/Login/Login', method: 'post', data })

export const login = (data: any) => request({ url: '/Login/Login2', method: 'post', data })

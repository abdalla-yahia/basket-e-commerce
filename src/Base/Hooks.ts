import { AxiosRequestConfig } from 'axios';
import BaseUrl from './baseUrl';

export const GetHook = async (url:string,params?:AxiosRequestConfig<unknown>)=>{
    const res = await BaseUrl.get(url,params)
    return res
}

export const PostHook = async (url:string,params?:AxiosRequestConfig<unknown>)=>{
    const res = await BaseUrl.post(url,params)
    return res
}

export const PutHook =async (url: string,params?: AxiosRequestConfig<unknown>) =>{
        const res = await BaseUrl.put(url,params)
        return res
}

export const DeleteHook =async (url: string,params?: AxiosRequestConfig<unknown>)=>{
    const res = await BaseUrl.delete(url,params)
    return res
}
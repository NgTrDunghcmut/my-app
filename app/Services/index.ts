import axios from "axios";
import { baseRequest } from "./base";

export const login = async (data:any) =>{
    //console.log("user", data);
    const res = await baseRequest({
        method: 'POST',
        url: '/auth/login',
        data
    })
    return res;
}

export const getinfo = async(device_id:any) => {
    const res2 = axios.post('http://192.168.2.12:8000/list',{device_id})
    return res2;
}

export const getData2 = async(device_id:any, date:any)=>{
    const res3 = axios.post('http://192.168.2.12:8000/api/chartdata',{device_id: device_id, date: date})
    return res3
}

export const downloadcsv = async () =>{
    const res4 = axios.get('http://192.168.2.12:8000/api/downloadcsv')
    console.log(res4)
    return res4
}
export const getlistdevice = async () => {
    const res5 = axios.get('http://192.168.2.12:8000/list')
    return res5
}

export const activateML =async (x:any) => {
    const res6 = axios.post('http://192.168.2.12:8000/mlactivate', {active:x})
    console.log(res6)
    return res6
}

export const deviceswitch = async(x:any) =>{
    const res6 = axios.post('http://192.168.1.10/switch',x)
    return res6     
}
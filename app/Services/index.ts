import axios from "axios";
import { baseRequest } from "./base";
const ipadd = "http://192.168.16.163:8000/"
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
    const res2 = axios.post(ipadd+'/list',{device_id})
    return res2;
}

export const getData2 = async(device_id:any, date:any)=>{
    const res3 = axios.post(ipadd+'/api/chartdata',{device_id: device_id, date: date})
    return res3
}

export const downloadcsv = async (device_id:any, date:any) =>{
    const res4 = axios.post(ipadd+'/api/downloadcsv',{device_id,date})
    console.log(res4)
    return res4
}
export const getlistdevice = async () => {
    const res5 = axios.get(ipadd+'/list')
    return res5
}

export const activateML =async (x:any,id:any) => {
    const res6 = axios.post(ipadd+'/mlactivate', {active:x, device_id:id})
    return res6
}

export const deviceswitch = async(x:any) =>{
    const res6 = axios.post(ipadd+'/deviceon',{on:x})
    return res6     
}

export const disconnectmqtt = async () => {
    const res7 = axios.get(ipadd+'/disconnectmqtt')
    return res7
}

export const connectmqtt = async () => {
    const res8 = axios.get(ipadd+'/connectmqtt')
    return res8
}

export const getresult = async (id:any) => {
    const res9 = axios.post(ipadd+'/getvariables',{id:id})
    return res9
}

export const traindevice = async (id:any)=>{
    const res10 = axios.post(ipadd+'training',{id:id})
    return res10
}

export const newtopic = async (id:any)=>{
    const res11 = axios.post(ipadd+"newtopic",{id:id})
    return res11
}


export const resetML = async ()=>{
    const res11 = axios.get(ipadd+'/mlactivate')
    return res11
}
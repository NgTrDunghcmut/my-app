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

export function getData(response:any) {
    const cdata: any = response?.data.map((item: any) => ({
        time: item.time,
        x: item.x,
        y: item.y,
        z: item.z,
      }));
    return cdata;
}

export const getData2 = async()=>{
    const res3 = axios.get('http://192.168.2.10:8000/api/chartdata')
    console.log('gui roi nha ba')
    // console.log(res3)
    return res3
}

export const downloadcsv = async () =>{
    const res4 = axios.get('http://192.168.1.38:8000/api/downloadcsv')
    console.log(res4)
    return res4
}
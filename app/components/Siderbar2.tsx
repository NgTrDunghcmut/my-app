"use client";

import { useEffect, useRef, useState } from "react";
import { getlistdevice } from "../Services";
const devices: any = [];
const type: any = [];
const Siderbar2 = () => {
  const [inputlist, getlist] = useState<any>();
  const [refresh, updatelist] = useState(false);
  const curlist = useRef();
  useEffect(() => {
    // const getlistfirstdata = async () => {
    //   const res = await getlistdevice();
    //   getlist(res.data);
    //   console.log(inputlist);
    // };
    getlistdata();
    // devicelist();
  }, []);
  useEffect(() => {
    const k = getlistdata();
    console.log(curlist);
  }, [refresh]);
  const getlistdata = async () => {
    const res = await getlistdevice();
    getlist(res.data);
    curlist.current = res.data;
    // console.log(res.data);
    return res.data;
  };

  //   console.log(devices);
  return (
    <>
      <button onClick={() => updatelist(!refresh)}>REFRESH</button>
      <div>{curlist.current}</div>
    </>
  );
};
export default Siderbar2;

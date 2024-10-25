"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { connectmqtt, getlistdevice } from "../Services";

import { twMerge } from "tailwind-merge";

const Sidebar2 = () => {
  const [inputlist, setlist] = useState<any>([]);
  useEffect(() => {
    getlistdata();
  }, []);

  const getlistdata = async () => {
    const res = await getlistdevice();
    setlist(res.data);
    console.log(res.data);
  };

  // console.log(devices);
  return (
    // <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-blue-500 min-h-[calc(100vh-10px)]">
    <div
      style={{ fontFamily: "Tech" }}
      className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-blue-500 min-h-[calc(100vh-10px)]"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center bg-white rounded-xl">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-500"></i>
          <h1 className="text-[25px] font-bold text-blue-500 text-[15px] ml-3">
            List of devices
          </h1>
        </div>
      </div>
      <ul>
        {inputlist.map((device: any) => {
          return (
            <li key={device.id}>
              <Link
                href={`/devices/${device?.id}`}
                className={twMerge(
                  "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white",
                  device?.id?.toString() ? "bg-blue-600" : ""
                )}
                key={device?.id}
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[20px] ml-4 text-gray-200 font-bold">
                  {device?.name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar2;

"use client";

import Header from "@/app/components/Header";
import MainView from "@/app/components/MainView";
import Sidebar2 from "@/app/components/Sidebar2";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const DeviceDetail = () => {
  const { deviceID } = useParams();

  return (
    <main className=" min-h-screen flex-col items-center justify-between">
      <Header />
      <div className="grid grid-cols-4 gap-4">
        <div className="flex col-span-1">
          <Sidebar2 />
        </div>
        <div className="col-span-3 pr-16">
          <MainView device_id={parseInt(deviceID.toString())} />
        </div>
      </div>
      <Header />
    </main>
  );
};

export default DeviceDetail;

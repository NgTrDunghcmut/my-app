"use client";
import MainLayout from "@/app/components/MainLayout";
import MainView from "@/app/components/MainView";
import { useState, useEffect } from "react";
import { downloadcsv, getData, getData2 } from "@/app/Services";
//import { Anybody } from "next/font/google";
import { AxiosResponse, all } from "axios";
import MyChart from "@/app/components/Chart";
import { time } from "console";
//import Downloadbutton from "@/app/components/DownloadButton";
var c: number = 0;

const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];
const Type1 = () => {
  return (
    <>
      <MainLayout>
        <MainView />
        {/* <div className="App">
          <MyChart chartData={chartdata} /> */}
        {/* </div> */}
      </MainLayout>
    </>
  );
};

export default Type1;

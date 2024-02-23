"use client";
import MainLayout from "@/app/components/MainLayout";
import MainView from "@/app/components/MainView";
import { useState, useEffect } from "react";
import { downloadcsv, getData, getData2 } from "@/app/Services";
//import { Anybody } from "next/font/google";
import { AxiosResponse, all } from "axios";
import Chart from "@/app/components/Chart";
//import Downloadbutton from "@/app/components/DownloadButton";
var c: number = 0;
const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];
const Type1 = () => {
  const [response, setData] = useState<any>(null);
  useEffect(() => {
    const getDataChart = async () => {
      const res = await getData2(); //getData2 là lấy data thôi
      setData(res);
      console.log("1");
    };
    getDataChart();
    const dataset: any = response?.data.map((item: any) => {
      timeline.push(item.time);
      x.push(item.x);
      y.push(item.y);
      z.push(item.z);
      return {
        timeline,
        x,
        y,
        z,
      };
    });
    // if (c < 1) c = c + 1;
    console.log(response);
  }, []);

  // useEffect(() => {
  //   const dataset: any = response?.data.map((item: any) => {
  //     timeline.push(item.time);
  //     x.push(item.x);
  //     y.push(item.y);
  //     z.push(item.z);
  //     return {
  //       timeline,
  //       x,
  //       y,
  //       z,
  //     };
  //   });
  //   //dataset;
  // }, [c]);
  console.log(x);
  const chartdata = {
    timeline,
    dataset: [
      {
        label: "X",
        data: x,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Y",
        data: y,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Z",
        data: z,
        borderColor: "rgb(120, 150, 190)",
        backgroundColor: "rgba(154, 130, 183, 0.5)",
      },
    ],
  };
  console.log("do dai", timeline.lenght);
  // console.log(dataset.item.time);
  return (
    <>
      <MainLayout>
        <MainView />
        {/* <Chart chartdata={chartdata} /> */}
      </MainLayout>
    </>
  );
};

export default Type1;

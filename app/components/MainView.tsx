"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Chart from "./Chart";
import Downloadbutton from "./DownloadButton";
import MyChart from "./Chart";
import GetChartData from "./Data";
import { getData2 } from "../Services";
const tabs = [
  {
    title: "Training histogram",
  },
  {
    title: "Device info",
  },
  {
    title: "Data",
  },
];
const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];
var c: number = 0;
// const chartData = GetChartData();
const styleActive =
  "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const style =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
const MainView = () => {
  const [active, setActive] = useState(0);
  const [response, setData] = useState([]);
  useEffect(() => {
    const getDataChart = async () => {
      const res = await getData2(); //getData2 là lấy data thôi
      setData(res.data);
      console.log(res.data);
    };
    getDataChart();
    if (c < 1) c = c + 1;
  }, []);
  // console.log(response);
  useEffect(() => {
    const dataset = response?.map((item: any) => {
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
    // dataset;
  }, [c]);
  // consoe.log(x);
  const labels = timeline;
  const chartdata = {
    labels,
    datasets: [
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

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((item, index) => {
            return (
              <li className="me-2" key={index} onClick={() => setActive(index)}>
                <a
                  href="#"
                  className={twMerge(
                    style,
                    active === index ? styleActive : ""
                  )}
                >
                  {item?.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {active === 0 && <>{/* <Chart /> */}</>}
      {active === 1 && <>show info</>}
      {active === 2 && (
        <>
          <Downloadbutton />
          <MyChart chartData={chartdata} />
        </>
      )}
    </div>
  );
};
export default MainView;

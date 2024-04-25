"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Downloadbutton from "./DownloadButton";
import MyChart from "./Chart";
import { getData2 } from "../Services";
// import SwitchButton from "./ToggleSwitch";
import DeviceSwitch from "./StartStop";
// import Datepicker from "./Datepicker";
import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Datepicker from "./Datepicker";
import Popup from "./Popup";
import MLActivate from "./MLactivate";
import Table from "./Table";

dayjs.extend(customParseFormat);

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

const styleActive =
  "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const style =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

const MainView = ({ device_id }: any) => {
  const [selectedDate, setSelectedDate] = useState<any>(
    dayjs().format("YYYY-MM-DD")
  );
  const handleDateChange = (dateString: any) => {
    setSelectedDate(dateString);
  };
  const [active, setActive] = useState(0);
  const [data, setData] = useState<any>();
  const [id, setID] = useState<any>();
  useEffect(() => {
    let timer = setInterval(() => {
      getDataChart(device_id, selectedDate);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [device_id, selectedDate]);

  async function getDataChart(device_id: any, date: any) {
    try {
      setID(device_id);
      const res = await getData2(device_id, date);
      let timeline: any[] = [];
      let x: any[] = [];
      let y: any[] = [];
      let z: any[] = [];
      res.data.forEach((item: any) => {
        timeline.push(item.time);
        x.push(item.x);
        y.push(item.y);
        z.push(item.z);
      });

      const chartData: any = {
        labels: timeline,
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
      setData(chartData); // Update chartData state
      // console.log("hello", data.labels);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div>
      <div
        style={{ fontFamily: "Tech" }}
        className="text-[18px] font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6"
      >
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
      {active === 1 && (
        <>
          <Table data={id} />
        </>
      )}
      {active === 2 && (
        <>
          <div
            className="flex justify-between mt-3"
            style={{ fontFamily: "Tech", fontWeight: "bold" }}
          >
            <DeviceSwitch />
            <Datepicker onDataChange={handleDateChange} />
            <Downloadbutton />
            <MLActivate />
          </div>
          {data && <MyChart chartData={data} />}
          <Popup
            message="DATA ERROR"
            description={`Can not find data on ${selectedDate}/device`}
            data={data}
          />
        </>
      )}
    </div>
  );
};
export default MainView;

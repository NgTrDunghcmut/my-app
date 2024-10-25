"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Downloadbutton from "./DownloadButton";
import MyChart from "./Chart";
import { getData2, getresult, newtopic, resetML } from "../Services";
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
import Mybarchart from "./Barchart";
import Trainbutton from "./Train";
import MSEchart from "./MSEchart";
import LoadingSpinner from "./Spiner";

dayjs.extend(customParseFormat);

const tabs = [
  {
    title: "Anomaly scores",
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
  const [result, setResult] = useState<any>();
  const [data, setData] = useState<any>();
  const [loss, setLoss] = useState<any>();
  const [valloss, setValLoss] = useState<any>();
  const [accu, setAccu] = useState<any>();
  const [mse, setMSE] = useState<any>();
  const [pred_data, setPre_data] = useState<any>();
  const [id, setID] = useState<any>();
  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    resetML();
    let timer = setInterval(() => {
      getDataChart(device_id, selectedDate);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [device_id, selectedDate]);
  useEffect(() => {
    setLoading(true);
    newtopic(id);
  }, [id]);
  async function getDataChart(device_id: any, date: any) {
    try {
      setID(device_id);
      const res = await getData2(device_id, date);
      const hi = await getresult(device_id);
      let timeline: any = [];
      let x: any[] = [];
      let y: any[] = [];
      let z: any[] = [];
      let ans: any[] = [];
      // console.log(hi.data);
      if (
        typeof hi.data["recommend"] === "number" &&
        !isNaN(hi.data["recommend"])
      ) {
        const { recommend, loss, val_loss, accu, mse } = hi.data;
        setResult(recommend);
        setAccu(accu);
        setValLoss(val_loss);
        setLoss(loss);
        setMSE(mse);
      }
      res.data.forEach((item: any) => {
        timeline.push(item.time);
        x.push(item.x);
        y.push(item.y);
        z.push(item.z);
        ans.push(item.ans);
      });
      const allValues = [...x, ...y, ...z];

      // Find min and max values among all arrays
      const chartData: any = {
        labels: timeline,
        datasets: [
          {
            type: "line",
            label: "X",
            data: x,
            borderColor: "#fff800",
            backgroundColor: "#fffc88",
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

      const chartData2: any = {
        labels: timeline,
        datasets: [
          {
            data: ans.map((score) => (score === 0 ? 1 : null)),
            backgroundColor: "green",
            barThickness: 0.5,
          },
          {
            data: ans.map((score) => (score > 0 ? 1 : null)),
            backgroundColor: "red",
            borderWidth: 1,
            barThickness: 0.5,
          },
        ],
      };
      setData(chartData); // Update chartData state
      setPre_data(chartData2);
      setLoading(false);
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

      {active === 0 && (
        <div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {typeof result === "number" ||
              (Array.isArray(result) && result.length > 0) ? (
                <div
                  style={{
                    fontSize: "15px",
                    backgroundColor: "#A4F5F5",
                    fontWeight: "bolder",
                    fontFamily: "Tech",
                    blockSize: 35,
                  }}
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-Black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                >
                  <h2>
                    Anomaly Threshold:{" "}
                    {typeof result === "number"
                      ? result.toFixed(4)
                      : JSON.stringify(result, null, 2)}{" "}
                    | Accuracy:{" "}
                    {typeof accu === "number"
                      ? accu.toFixed(4)
                      : JSON.stringify(accu, null, 2)}
                    | Loss:{" "}
                    {typeof loss === "number"
                      ? loss.toFixed(6)
                      : JSON.stringify(accu, null, 2)}
                  </h2>
                </div>
              ) : (
                <div
                  style={{ fontFamily: "Tech" }}
                  className="text-[18px] font-bold text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6"
                >
                  Error: Model for this device has not been trained
                  <div className="mt-4">
                    <Trainbutton device_id={id} />
                  </div>
                </div>
              )}

              {mse && <MSEchart mse={mse} />}
            </div>
          )}
        </div>
      )}
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
            <Downloadbutton device_id={id} date={selectedDate} />
            <MLActivate device_id={id} />
          </div>
          {data && <MyChart chartData={data} />}
          {data && <Mybarchart data={pred_data} />}
        </>
      )}
    </div>
  );
};
export default MainView;

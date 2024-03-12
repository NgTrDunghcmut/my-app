import { useEffect, useState } from "react";
import { getData2 } from "../Services";
const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];
var c: number = 0;
const GetChartData = () => {
  const [response, setData] = useState([]);
  // const [ready, setDataready] = useState(false);
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
  return chartdata;
};
export default GetChartData;

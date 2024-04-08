import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
  Animation,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
import { getData2 } from "../Services";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "DATA display",
    },
  },
  animation: false, // Moved animation option to the correct position
  showLine: true, // This seems to be a global option, not under plugins
  datasets: {
    line: {
      pointRadius: 0, // disable for all `'line'` datasets
    },
  },
};

// scales: {
//   xAxes: {
//     type: "time",
//     ticks: {
//       autoSkip: true,
//       maxTicksLimit: 20,
//     },
//   },
// },

var c: number = 0;
const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];

function MyChart({ chartData }: any) {
  // const [response, setData] = useState([]);
  // const [ready, setDataready] = useState(false);
  // useEffect(() => {
  //   const getDataChart = async () => {
  //     const res = await getData2(); //getData2 là lấy data thôi
  //     setData(res.data);
  //     // console.log(res.data);
  //   };
  //   getDataChart();

  //   // const dataset: any = response?.map((item: any) => {
  //   //   timeline.push(item.time);
  //   //   // x.push(item.x);
  //   //   y.push(item.y);
  //   //   z.push(item.z);
  //   //   return {
  //   //     timeline,
  //   //     x: item.x
  //   //     y,
  //   //     z,
  //   //   };
  //   // });
  //   if (c < 1) c = c + 1;
  // }, []);
  // // console.log(response);
  // useEffect(() => {
  //   const dataset = response?.map((item) => {
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
  //   // dataset;
  // }, [c]);
  // console.log(x);
  // console.log(typeof x);
  // console.log(timeline.slice(0, 5));
  // const labels: any = timeline.slice(0, 5);
  // const chartdata = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "X",
  //       data: x.slice(0, 5),
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //     {
  //       label: "Y",
  //       data: y.slice(0, 5),
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //     {
  //       label: "Z",
  //       data: z.slice(0, 5),
  //       borderColor: "rgb(120, 150, 190)",
  //       backgroundColor: "rgba(154, 130, 183, 0.5)",
  //     },
  //   ],
  // };
  // if (timeline.length) setDataready(true);
  // console.log(chartdata.data);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default MyChart;

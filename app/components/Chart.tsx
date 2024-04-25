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
  scales,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
import { getData2 } from "../Services";
import { DatePicker } from "antd";
import { color } from "chart.js/helpers";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "DATA DISPLAY",
      font: {
        family: "Tech",
        size: 28,
        weight: "lighter",
      },
      color: "blue",
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x",
      },
      limits: {
        x: { min: 0, max: 50 },
      },
      zoom: {
        wheel: {
          enabled: true,
          speed: 0.1,
        },
      },
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

var c: number = 0;
const timeline: any = [];
const x: any = [];
const y: any = [];
const z: any = [];

function MyChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default MyChart;

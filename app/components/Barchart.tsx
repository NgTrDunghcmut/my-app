import React from "react";
import {
  Chart as ChartJS,
  BarElement,
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
import { Bar } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const config: any = {
  indexAxis: "x", // Set indexAxis to 'y' for horizontal bar chart
  animation: false,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltips: {
      // Disable tooltips
      enabled: false,
    },
  },
  showLine: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false, // Hide grid lines on y-axis
      },
      ticks: {
        display: false,
      },
      display: false,
    },
    x: {
      grid: {
        display: false, // Hide grid lines on y-axis
      },
      display: true,
      stacked: true,
      ticks: {
        display: false,
      }, // Ensure bars are stacked along the y-axis
    },
  },
};
export default function Mybarchart({ data }: any) {
  return (
    <div style={{ width: "100%", height: "20px" }}>
      <Bar data={data} options={config} />
    </div>
  );
}

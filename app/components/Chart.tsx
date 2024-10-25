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
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(zoomPlugin);
// import { faker } from "@faker-js/faker";

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

export const options: any = {
  responsive: true,
  spanGaps: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "DATA DISPLAY",
      font: {
        family: "Tech",
        size: 28,
        weight: "lighter",
      },
      color: "black",
    },

    zoom: {
      pan: { enabled: true, mode: "xy", threshold: 20 },
      zoom: {
        wheel: {
          enabled: true,
          modifierKey: "ctrl",
        },
        pinch: {
          enabled: true,
        },
        mode: "xy",
        scaleMode: "xy",
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

function MyChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default MyChart;

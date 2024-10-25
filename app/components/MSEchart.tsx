// ChartComponent.jsx
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export const options: any = {
  responsive: true,
  spanGaps: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "DISTRIBUTION CHART OF ANOMALY SCORES",
      font: {
        family: "Tech",
        size: 28,
        weight: "lighter",
      },
      color: "black",
    },
  },
};
const MSEchart = ({ mse }: any) => {
  const [chartData, setChartData] = useState<any>();

  useEffect(() => {
    if (mse.length === 0) return;

    // Compute histogram
    const bins = 20; // Number of bins for the histogram
    const min = Math.min(...mse);
    const max = Math.max(...mse);
    const binWidth = (max - min) / bins;
    const histogram = Array(bins).fill(0);

    // console.log("Min:", min, "Max:", max, "BinWidth:", binWidth); // Debugging: Check min, max, and binWidth

    mse.forEach((value: any) => {
      const bin = Math.min(bins - 1, Math.floor((value - min) / binWidth));
      // console.log("Value:", value, "Bin:", bin); // Debugging: Check value to bin mapping
      histogram[bin]++;
    });

    const labels = Array.from({ length: bins }, (_, i) =>
      ((min + i * binWidth + min + (i + 1) * binWidth) / 2).toFixed(6)
    );

    // console.log("Histogram:", histogram); // Debugging: Check histogram values
    // console.log("Labels:", labels); // Debugging: Check labels

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Frequency",
          data: histogram,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [mse]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MSEchart;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Gold Earned",
//     },
//   },
// };

// const labels = ["1", "2", "3", "4", "5", "6"];
// const bs = [1 / 5, 2 / 5, 3 / 5, 4 / 8, 1, 0.1];

const BarChart = ({ options, data }) => {
  return <Bar options={options} data={data} />;
};
export default BarChart;

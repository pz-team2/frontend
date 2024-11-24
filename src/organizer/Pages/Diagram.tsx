import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Diagram Penjualan Bulanan",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

interface DiagramProps {
  labels: string[];
  data: number[];
}

const Diagram: React.FC<DiagramProps> = ({ labels, data }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Tiket Terjual",
        data,
        backgroundColor: "#2EB2C2",
      },
    ],
  };

  return (
    <div className="w-full h-64 sm:h-96 md:h-80 flex justify-center">
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default Diagram;

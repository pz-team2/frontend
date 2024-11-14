// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Diagram Penjualan Bulanan',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli'],
  datasets: [
    {
      label: 'Tiket Terjual',
      data: [10, 20, 60, 80, 10, 25, 50],
      backgroundColor: '#2EB2C2',
    },
  ],
};

const Diagram: React.FC = () => {
  return (
    <div className="w-full h-64 sm:h-96 md:h-80  flex justify-center">
      <Bar options={options} data={data} />
    </div>
  );
};

export default Diagram;

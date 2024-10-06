"use client";
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['Football', 'Boxing', 'Running', 'Golf', 'Basketball', 'Rugby', 'Badminton'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 6, 10, 16, 10, 6, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 99, 132, 0.5)',
      ],
    },
  ],
};

export function DoughnutChart003() {
  return (
    <div style={{ width: '1000px', height: '300px' }}>
      <Doughnut options={options} data={data} />
    </div>
  );
}

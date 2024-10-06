"use client";
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false, // ปิดการรักษาสัดส่วน
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'กราฟวงกลม',
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
      ],
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 2,
    },
  ],
};

export function PieChart001() {
  return (
    <div style={{ width: '1100px', height: '300px' }}>
      <Pie options={options} data={data} />
    </div>
  );
}
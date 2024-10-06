"use client";
import React from 'react';
import {
  Chart as ChartJS,
  BubbleController,
  LineElement,
  Tooltip,
  Legend,
  LinearScale,
  Title,
  PointElement,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(BubbleController, LineElement, Tooltip, Legend, LinearScale, Title, PointElement);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#333',
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: '',
      font: {
        size: 20,
        weight: 'bold',
      },
      color: '#333',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'X-Axis Label',
        color: '#333',
        font: {
          size: 14,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.5)',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Y-Axis Label',
        color: '#333',
        font: {
          size: 14,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.5)',
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: 'กราฟ Bubble',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 25 },
        { x: 25, y: 40, r: 20 },
        { x: 35, y: 20, r: 10 },
        { x: 30, y: 30, r: 30 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
    },
   
  ],
};

export function BubbleChart004() {
  return (
    <div style={{ width: '1000px', height: '400px' }}>
      <Bubble options={options} data={data} />
    </div>
  );
}

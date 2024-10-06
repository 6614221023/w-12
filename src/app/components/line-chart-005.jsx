"use client";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const options = {
  
  responsive: true,
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


export const data = {
  labels,
  datasets: [
    {
      label: 'ผู้หญิงชอบกีฬา',
      data: [1,5,10,15,2,3,0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'ผู้ชายชอบกีฬา',
      data: [15,15,12,6,10,16,10],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export function LineChart005() {
  return <Line options={options} data={data} />;
}

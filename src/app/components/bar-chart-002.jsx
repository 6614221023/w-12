"use client";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
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

const data = {
  labels: ['Football', 'Boxing', 'Running', 'Golf', 'Basketball', 'Rugby', 'Badminton'],
  datasets: [
    {
      label: 'กราฟแท่ง',
      data: [12, 6, 10, 16, 10, 6, 12],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(255, 159, 64, 0.5)',  
    'rgba(75, 192, 192, 0.5)',   
    'rgba(153, 102, 255, 0.5)', 
    'rgba(255, 99, 132, 0.5)',  
    'rgba(54, 162, 235, 0.5)',   
      ],
    },
  ],
};

export function BarChart002() {
  return <Bar options={options} data={data} />;
}
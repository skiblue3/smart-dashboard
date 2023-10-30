import React from 'react';
import { Line } from 'react-chartjs-2';

// DON'T TOUCH OR REMOVE IT
import Chart from 'chart.js/auto';
import { LinearScale, CategoryScale } from 'chart.js';

const UsageEstimateChart = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Usage Estimates (kWh)',
            data: [30, 45, 60, 55, 70, 65, 80], // Sample usage estimate values
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area fill color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 2,
            pointBorderColor: 'rgba(75, 192, 192, 1)', // Point border color
            pointBackgroundColor: '#fff', // Point fill color
            pointBorderWidth: 2,
            pointRadius: 5,
            fill: true, // Set to true to fill the area under the line
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Don't maintain aspect ratio to allow responsiveness
    };

    return (
        <div className="chart-container mx-auto max-w-full h-[24rem] bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <Line data={data} options={options} />
        </div>
    );
};

export default UsageEstimateChart;

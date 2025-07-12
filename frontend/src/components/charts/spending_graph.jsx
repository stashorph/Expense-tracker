"use client";
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Spendingdonut() {
    const [chartData, setChartData] = useState({
        labels: ['Subscriptions', 'Utilities', 'Bills', 'Shopping', 'Food'],
        datasets: [{
            label: 'Spending',
            data: [150,250, 300, 1299, 8.50],
            backgroundColor: [], // filled by useEffect
            borderColor: '#FFFFFF',     // filled by useEffect
            borderWidth: 0.8,
        }],
    });

    // State for chart options, also with dynamic colors
    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#FFFFFF', // filled by useeffect
                    padding: 10,
                    font: { size: 14 },
                },
            },
        },
        cutout: '70%',
    });

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);

        const colors = [
            rootStyles.getPropertyValue('--chart-1').trim(),
            rootStyles.getPropertyValue('--chart-2').trim(),
            rootStyles.getPropertyValue('--chart-3').trim(),
            rootStyles.getPropertyValue('--chart-4').trim(),
            rootStyles.getPropertyValue('--chart-5').trim(),
        ];

        const cardColor = rootStyles.getPropertyValue('--bg').trim();
        const foregroundColor = rootStyles.getPropertyValue('--foreground-color').trim();
        const borderColor = rootStyles.getPropertyValue('--border').trim();
        
        setChartData(prevData => ({
            ...prevData,
            datasets: [{
                ...prevData.datasets[0],
                backgroundColor: colors,
                borderColor: borderColor,
            }]
        }));

        setChartOptions(prevOptions => ({
            ...prevOptions,
            plugins: {
                ...prevOptions.plugins,
                legend: {
                    ...prevOptions.plugins.legend,
                    labels: {
                        ...prevOptions.plugins.legend.labels,
                        color: borderColor,
                    }
                }
            }
        }));
    }, []); //empty array so effect runs only once on mount

    return (
    <div className="flex flex-col items-center justify-center w-full h-auto mt-15">
    <div className="w-64 h-64 md:w-80 md:h-80 relative mb-4">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
    </div>
    );

}

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
            data: [150, 250, 300, 1299, 8.50],
            backgroundColor: [], // filled by useEffect
            borderColor: '',     // filled by useEffect
            borderWidth: 2,
        }],
    });

    // State for chart options, also with dynamic colors
    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    color: '', // filled by useeffect
                    padding: 20,
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

        const cardColor = rootStyles.getPropertyValue('--card').trim();
        const foregroundColor = rootStyles.getPropertyValue('--foreground').trim();
        
        setChartData(prevData => ({
            ...prevData,
            datasets: [{
                ...prevData.datasets[0],
                backgroundColor: colors,
                borderColor: cardColor,
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
                        color: foregroundColor,
                    }
                }
            }
        }));
    }, []); //empty array so effect runs only once on mount

    return (
        <div className="relative h-64 md:h-full">
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
}

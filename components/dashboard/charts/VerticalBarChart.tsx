import React, { useRef, useEffect, useState, FC } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import styles from '../../../styles/dashboard/charts/VerticalBarChart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      borderRadius: 12,
      width: 0.2,
      data: [9, 8, 10, 7, 3, 40, 35],
      barPercentage: 0.6,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  layout: {
    padding: 11,
  },
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(108, 15, 227, 0)';
  const colorMid = '#6C0FE3';
  const colorEnd = '#6C0FE3';

  const gradient = ctx.createLinearGradient(20, area.bottom, 5, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const VerticalBarChart: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className={`w-[95%] absolute bottom-6 ${styles['chart-container']}`}>
      <Chart ref={chartRef} options={options} type="bar" data={chartData} />
    </div>
  );
};

export default VerticalBarChart;

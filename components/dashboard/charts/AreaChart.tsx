import { FC, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/dashboard/charts/areaChart.module.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartArea,
  ChartData,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
  responsive: true,
  lineTension: 0.5,
  radius: 5,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const data = {
  labels,

  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3, 10],
      borderColor: 'rgba(108, 15, 227, 0.8)',
      borderWidth: 2,
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = 'rgba(108, 15, 227, 0)';
  const colorMid = '#6C0FE3';
  const colorEnd = '#6C0FE3';

  const gradient = ctx.createLinearGradient(20, area.bottom, 15, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const AreaChart: FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'line'>>({
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
      <Chart ref={chartRef} type="line" options={options} data={chartData} />
    </div>
  );
};

export default AreaChart;

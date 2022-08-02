import React, { useEffect, useState } from "react";
import "./LineChart.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  LineElement
);

const LineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const url = "https://glacial-ravine-95088.herokuapp.com/data";
    fetch(url)
      .then((res) => res.json())
      .then((datum) => {
        console.log(datum);
        setChartData(datum.slice(10, 40));
      });
  }, []);

  const data = {
    labels: chartData?.map((x) => x.end_year),
    datasets: [
      {
        label: `${chartData.length} number`,
        data: chartData?.map((x) => x.intensity),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <h6>This is Line Chart</h6>
      <div className="line-chart">
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChart;

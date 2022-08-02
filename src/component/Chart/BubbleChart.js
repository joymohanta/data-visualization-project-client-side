import React, { useEffect, useState } from "react";
import "./BubbleChart.css";
import {
  Chart as ChartJS,
  registerables,
  // BarElement,
  // CategoryScale,
  // LinearScale,
  // Tooltip,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

ChartJS.register(...registerables);

const BubbleChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const url = "https://glacial-ravine-95088.herokuapp.com/data";
    fetch(url)
      .then((res) => res.json())
      .then((datum) => {
        console.log(datum);
        setChartData(datum);
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
        radius: 8,
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
      <h6>This is Bubble Chart</h6>
      <div className="bubble-chart">
        <Bubble data={data} options={options}></Bubble>
      </div>
    </div>
  );
};

export default BubbleChart;

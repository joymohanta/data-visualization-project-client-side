import React, { useEffect, useState } from "react";
import "./PieChart.css";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(Legend, Tooltip, ArcElement);

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const url = "https://stark-temple-65149.herokuapp.com/data";
    fetch(url)
      .then((res) => res.json())
      .then((datum) => {
        console.log(datum);
        setChartData(datum.slice(0, 10));
      });
  }, []);

  const data = {
    labels: chartData?.map((x) => x.region),
    datasets: [
      {
        label: `${chartData.length} number`,
        data: chartData?.map((x) => x.relevance),
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
      <h6>This is Pie Chart</h6>
      <div className="pie-chart">
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;

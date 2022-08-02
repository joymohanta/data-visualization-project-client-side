import React, { useEffect, useState } from "react";
import "./BarChart.css";
import {
  Chart as ChartJS,
  registerables,
  // BarElement,
  // CategoryScale,
  // LinearScale,
  // Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const url = "https://glacial-ravine-95088.herokuapp.com/data";
    fetch(url)
      .then((res) => res.json())
      .then((datum) => {
        console.log(datum);
        setChartData(datum.slice(2, 31));
      });
  }, []);

  const data = {
    labels: chartData?.map((x) => x.added),
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

  function filterDates() {
    const chartDates = [...chartData?.map((x) => x.added)];
    console.log(chartDates);
  }

  return (
    <div>
      <h6>This is Bar Chart</h6>
      <div className="bar-chart">
        <Bar data={data} options={options}></Bar>
        <input
          onChange={filterDates()}
          type="date"
          name="startDate"
          id="startDate"
          value={"2017-01-14"}
        />
        <input
          onChange={filterDates()}
          type="date"
          name="endDate"
          id="endDate"
          value={"2017-01-20"}
        />
      </div>
    </div>
  );
};

export default BarChart;

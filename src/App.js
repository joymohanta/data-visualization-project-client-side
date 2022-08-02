import "./App.css";
import BarChart from "./component/Chart/BarChart";
import BubbleChart from "./component/Chart/BubbleChart";
import DoughnutChart from "./component/Chart/DoughnutChart";
import LineChart from "./component/Chart/LineChart";
import PieChart from "./component/Chart/PieChart";

function App() {
  return (
    <div className="App">
      <h1>Data visualization chart !!</h1>

      <BarChart></BarChart>
      <div className="circle-chart">
        <PieChart className="piechart"></PieChart>
        <DoughnutChart className="doughnut"></DoughnutChart>
      </div>
      <LineChart></LineChart>
      <BubbleChart></BubbleChart>
    </div>
  );
}

export default App;

import "./styles.css";
import tableData from "./dummyData.json";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export default function App() {
  const [tab, setTab] = useState("table");

  const options = {
    responsive: true,
    scales: {
      yAxes: {
        title: {
          display: true,
          text: "Medals",
          font: {
            size: 15
          }
        },
        ticks: {
          precision: 0
        }
      },
      xAxes: {
        title: {
          display: true,
          text: "Years",
          font: {
            size: 15
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Medals won by india in olympics",
        font: {
          size: 20
        }
      }
    }
  };

  const [data, setData] = useState({
    labels: [2004, 2008, 2012, 2016, 2020],
    datasets: [
      {
        label: "Medals won by india in olympics",
        data: [1, 3, 6, 2, 7],
        backgroundColor: "yellow",
        borderColor: "rgb(81, 81, 250)",
        tension: 0,
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true
      }
    ]
  });
  const handleTabs = (tab) => {
    setTab(tab);
  };

  return (
    <div className="App">
      <div className="tab">
        <div
          onClick={() => handleTabs("table")}
          className={tab === "table" ? "tab-item-act" : "tab-item"}
        >
          Table
        </div>
        <div
          onClick={() => handleTabs("chart")}
          className={tab === "chart" ? "tab-item-act" : "tab-item"}
        >
          Chart
        </div>
      </div>
      <div className="tab-content">
        {tab === "table" ? (
          <table>
            <tr>
              <th>ID</th>
              <th>Years</th>
              <th>Medal</th>
            </tr>
            {tableData.map((item, i) => (
              <tr key={i}>
                <td>{item?.Id}</td>
                <td>{item?.Year}</td>
                <td>{item?.Medals}</td>
              </tr>
            ))}
          </table>
        ) : (
          <Line options={options} data={data}>
            Hello
          </Line>
        )}
      </div>
      <div className="personal">
        <p>
          <h4>Name:</h4>
          Venkatesh Konuku
        </p>{" "}
        <br />
        <p>
          <h4>Email:</h4>
          <a href="mailto:venkateshkonukuladdu888@gmail.com">
            venkateshkonukuladdu888@gmail.com
          </a>
        </p>{" "}
        <br />
        <p>
          <h4>Phone:</h4>
          7731012637
        </p>{" "}
        <br />
      </div>
    </div>
  );
}

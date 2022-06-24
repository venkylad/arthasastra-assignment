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
import { useState } from "react";
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

const ChartComponent = ({ tableData }) => {
  //options for axis names for chart
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

  // state for chart
  const [data, setData] = useState({
    labels: tableData?.map((item) => item.Year),
    datasets: [
      {
        label: "Medals won by india in olympics",
        data: tableData?.map((item) => item.Medals),
        backgroundColor: "yellow",
        borderColor: "rgb(81, 81, 250)",
        tension: 0,
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true
      }
    ]
  });
  return (
    <>
      <Line options={options} data={data}>
        Hello
      </Line>
    </>
  );
};
export default ChartComponent;

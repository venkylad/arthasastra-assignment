import { useState } from "react";
import ChartComponent from "./Chart";
import Personal from "./Personal";
import Table from "./Table";
import tableData from "../dummyData.json";

const Tabs = () => {
  //state for tabs
  const [tab, setTab] = useState("table");

  //to handle switching between tabs
  const handleTabs = (tab) => {
    setTab(tab);
  };

  return (
    <>
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
        {tab === "table" ? <Table data={tableData} /> : <ChartComponent />}
      </div>
      <Personal />
    </>
  );
};

export default Tabs;

import React, { useState } from "react";
import "./list.css";
import listData from "./data.json";

export const List = () => {
  const [data, setData] = useState(listData);

  const resetData = () => {
    setData(listData);
  };

  const removeItem = (id) => {
    const newData = data.filter(row => row.id !== id);
    setData(newData);
  }

  return (
    <div className="listWrapper">
      <ul>
        {data.map((ele) => (
          <li key={ele.id} style={{ marginBottom: "6px" }}>
            {ele.name}
            <button style={{ marginLeft: "6px" }}
            onClick={() => removeItem(ele.id)}
            >Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={resetData} style={{ marginRight: "6px" }}>
        Reset
      </button>
      <button onClick={() => setData([])}>Clear All</button>
    </div>
  );
};

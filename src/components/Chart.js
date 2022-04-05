import React from "react";
import ChartRow from "./ChartRow";
import { useState, useEffect } from "react";

function Chart() {
  const [tableRowsData, setTableRowsData] = useState([]);
  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setTableRowsData(data.products);
      });
  }, []);
  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;

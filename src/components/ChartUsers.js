import React from "react";
import ChartRowUser from "./ChartRowUsers";
import { useState, useEffect } from "react";

function ChartUser() {
  const [tableRowsData, setTableRowsData] = useState([]);
  useEffect(() => {
    fetch("api/users")
      .then((res) => res.json())
      .then((data) => {
        setTableRowsData(data.usuarios);
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
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map((row, i) => {
                return <ChartRowUser {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ChartUser;

import React from "react";

function ChartRowUser(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.first_name}</td>
      <td>{props.last_name}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default ChartRowUser;

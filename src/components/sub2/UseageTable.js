import "./UseageTable.css";
import { Link, useNavigate } from "react-router-dom";

function UseageTable({ data }) {
  const navigate = useNavigate();

  function move(info) {
    const id = info.bike_id;
    navigate(`/useage/${id}`, { state: info });
  }

  const columns = ["자전거 번호", "위치", "날짜"];

  return (
    <div className="table_container">
      <table className="useage_table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <td>{info.bike_id}</td>
              <td>
                <div onClick={() => move(info)}>{info.location}</div>
              </td>
              <td>
                <div onClick={() => move(info)}>{info.date}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UseageTable;

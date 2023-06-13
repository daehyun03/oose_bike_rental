import "./Table.css"
import {Link, useNavigate} from "react-router-dom";

function Table({data}) {
    const navigate = useNavigate()
    function move(info) {
        const id = info.idx
        navigate(`/announcement/${id}`, {state: info})
    }
    const colums = ["No", "Title"]
    return(
        <div className="table_container">
            <table className="announce_table">
                <thead>
                    <tr>
                        {colums.map((colum) => (
                            <th>{colum}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((info) => (
                    <tr>
                        <td>{info.idx}</td>
                        <td><div onClick={() => move(info)}>{info.title}</div></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table

import { useEffect, useState } from "react"
import UseageTable from "./UseageTable"
import "./UseageInqury.css"
import axios from "axios"

export default function UseageInqury() {
    const [data, setData] = useState([])

    return(
        <div className="container">
            <h2>이용 내역 조회</h2>
            <UseageTable data={data}></UseageTable>
            <div className="button_container">
            </div>
        </div>
    )
} 

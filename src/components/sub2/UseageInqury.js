import { useEffect, useState } from "react"
import Table from "./UseageTable"
import "./UseageInqury.css"
import axios from "axios"


export default function UseageInqury() {
    const [data, setData] = useState([])

    useEffect(()=>{
        useageInq();
    }, [] )
    
    const useageInq = async () => {
        const response = await axios.get("http://127.0.0.1:3001/sub2Control/usesageInqury")
        setData(response.data)
    }


    return(
        <div className="container">
            <h2>이용 내역 조회</h2>
            <UseageTable data={data}></UseageTable>
            <div className="button_container">
            </div>
        </div>
    )
} 
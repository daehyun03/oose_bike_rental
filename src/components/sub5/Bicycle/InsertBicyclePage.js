import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import '../test.css';
import '../Sub5.css';

function onSubmit(id) {
     
    const Bicycle = {
        Bicycle : ({
            id : id,
        })
    }

    console.log(Bicycle);
    fetch('http://localhost:3001/sub5Control/insertBicycle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Bicycle),
    });
    alert("자전거 등록!")
}

function InsertBicyclePage(){
    const [id, setId] = useState('');

    function idChange(e) {
        setId(e.target.value)
    }
    return(
        <div className = "container">
            <div className="header">
                <h2>자전거 등록</h2>
            </div>
            <div className="body">
                <form className = "Insert_box" role = "form">
                    <span className = "text">자전거 ID:</span>
                    <input type="text" placeholder="자전거 ID 입력" onChange={(e)=>idChange(e)}/>
                </form>
                <button className="startBtn Btn"onClick={() => onSubmit(id)}>등록</button>
                <Link to="/bicycle">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </div>
        </div>
    );
}

export default InsertBicyclePage;


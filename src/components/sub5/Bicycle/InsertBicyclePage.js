import React from 'react';
import {Link } from 'react-router-dom';

function InsertBicyclePage(){

    return(
        <div className = "container">
            <div className="header">
                <h2>자전거 등록</h2>
            </div>
            <div className="body">
                <div className = "Insert_box">
                    <span className = "text">자전거 ID:</span>
                    <input type="text" placeholder="자전거 ID 입력" />
                </div>
                <button className="startBtn Btn">등록</button>
                <Link to="/bicycle">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </div>
        </div>
    );
}

export default InsertBicyclePage;


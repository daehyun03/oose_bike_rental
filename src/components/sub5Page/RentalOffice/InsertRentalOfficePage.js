import React from 'react';
import {Link } from 'react-router-dom';

function InsertRentalOfficePage(){

    return(
        <div className = "container">
            
            <div className="header">
                <h2>대여소 등록</h2>
            </div>
            <div className="body">
                <div className = "Insert_box">
                    <span>대여소 ID:</span>
                    <input type="text" placeholder="대여소 ID 입력" />
                    
                </div>
                <div className = "Insert_box">
                    <span>대여소 이름:</span>
                    <input type="text" placeholder="대여소 이름 입력"/>
                </div>
                <div className = "Insert_box">
                    <span>관리자 이름:</span>
                    <input type="text" placeholder="관리자 ID 입력" />
                </div>
                <button className="startBtn Btn">등록</button>
                <Link to="/rentalOffice">
                    <button className="backBtn Btn">뒤로</button>
                </Link>
                
            </div>
        </div>
    );
}

export default InsertRentalOfficePage;
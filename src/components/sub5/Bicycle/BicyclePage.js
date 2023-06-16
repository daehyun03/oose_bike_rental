import React from 'react';
import {Link } from 'react-router-dom';

import '../Sub5.css';
import '../../../index.css';

function BicyclePage(){
    return(
        <div className = "container">
            <div class = "header">
                <h2>자전거 관리</h2>
            </div>
            <div>
                <Link to="/bicycle/search">
                    <button class = "SearchBtn Btn">
                        자전거 검색
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/bicycle/insert">
                    <button class = "InsertBtn Btn">
                        자전거 등록
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default BicyclePage;

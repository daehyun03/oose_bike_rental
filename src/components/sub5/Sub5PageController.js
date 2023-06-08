import React from 'react';
import {Routes, Route } from 'react-router-dom';
import BicyclePage from './Bicycle/BicyclePage';
import InsertBicyclePage from './Bicycle/InsertBicyclePage';
import RentalOfficePage from './RentalOffice/RentalOfficePage';
import InsertRentalOfficePage from './RentalOffice/InsertRentalOfficePage';
import './test.css';
import './Sub5.css';

const Sub5PageController = () => {
  return (
    <div className='Sub5PageController'>
        <Routes>
          <Route path="/" element={<BicyclePage />} />
          <Route path="/bicycle" element={<BicyclePage />} />
          <Route path="/bicycle/insert" element={<InsertBicyclePage/>} />
          <Route path="/rentalOffice" element={<RentalOfficePage />} />
          <Route path="/rentalOffice/insert" element={<InsertRentalOfficePage/>} />
        </Routes>
    </div>
  );
};

export default Sub5PageController;


/*
실행하려면 아래의 index.js 필요
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import reportWebVitals from './reportWebVitals';
    import { BrowserRouter } from 'react-router-dom';
    import Sub5PageController from './sub5Page/Sub5PageController';

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Sub5PageController/>
        </BrowserRouter>
      </React.StrictMode>
    );

    reportWebVitals();

*/
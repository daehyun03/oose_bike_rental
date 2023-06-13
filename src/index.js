import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import BicyclePage from "./components/sub5/Bicycle/BicyclePage";
import InsertBicyclePage from "./components/sub5/Bicycle/InsertBicyclePage";
import RentalOfficePage from "./components/sub5/RentalOffice/RentalOfficePage";
import InsertRentalOfficePage from "./components/sub5/RentalOffice/InsertRentalOfficePage";
import Announcement from "./components/sub4/AnnouncementUI";
import SignUp from "./components/sub1/SignUp";
import Read from "./components/sub1/Read";
import AddAnnouncement from "./components/sub4/AddAnnouncement";
import AnnouncementDetail from "./components/sub4/AnnouncementDetail";
import InquryPay from "./components/sub3/InquryPay";
import InquryStaticsBike from "./components/sub3/InquryStaticsBike";
import RentalBikeUI from "./components/sub2/RentalBikeUI";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header></Header>
          <Routes>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/userInqury" element={<Read />} />
              <Route path="/useageInqury" element={<useageInqury />} />
              <Route path="/rentalBike" element={<RentalBikeUI />} />
              <Route path="/paymentInqury" element={<InquryPay />} />
              <Route path="/statistics" element={<InquryStaticsBike/>}/>
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/announcement/:no" element={<AnnouncementDetail />} />
              <Route path="/announcement/add" element={<AddAnnouncement />} />
              <Route path="/bicycle" element={<BicyclePage />} />
              <Route path="/bicycle/insert" element={<InsertBicyclePage/>} />
              <Route path="/rentalOffice" element={<RentalOfficePage />} />
              <Route path="/rentalOffice/insert" element={<InsertRentalOfficePage/>} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

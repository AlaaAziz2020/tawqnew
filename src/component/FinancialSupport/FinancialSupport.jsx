import React from "react";
import { useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../FinancialSupport/FinancialSupport.css";
import eyedark from '../../assets/eyedark.png';
import whitesupport from '../../assets/whitesupport.png';

export default function FinancialSupport() {
  //   const [openOrg, setOpenOrg] = useState(true);
  // const [selectedOrg, setSelectedOrg] = useState("اختر الجهة المدعومة");

  // const handleSelectOrg = (value) => {
  //   setSelectedOrg(value);
  //   setOpenOrg();
  // };

  return (
    <div className="support-wrapper">
      <div className="container">
        <div className="row">

          {/* ===== RIGHT SIDE TABS ===== */}
          <div className="col-lg-3  d-lg-block support-tabs-column">
            <div className="support-tabs tabs2">

              {/* الدعم العيني */}
              <Link to="/eyesupport" className="text-decoration-none support-tab inactive-tab">
                <img src={eyedark} />
                <span className="eye-text">الدعم العيني</span>
              </Link>

              {/* الدعم المادي */}
              <Link to="/financialsupport" className="text-decoration-none support-tab active-tab">
                <img src={whitesupport} />
                <span className="f-text mx-3 text-white">
                  الباقات
                  </span>
              </Link>

            </div>
          </div>

          {/* ===== LEFT SIDE FORM ===== */}
             <div className="col-lg-9 col-12">

            <div className="mb-4">
              <label className="label-title pt-3 ">الجهة المدعومة</label>
              {/* <span className="selectdown"><i className="fa fa-chevron-down"></i></span> */}
              <select className="form-control input-box custom-select">
                <option value="">اختر الجهة المدعومة</option>
                <option value="charity1">جمعية الخير</option>
                <option value="charity2">جمعية البر</option>
                <option value="charity3">مؤسسة الرحمة</option>
            </select>
            </div>
{/* <div className="custom-select" onClick={() => setOpenOrg(!openOrg)}>
  <span>{selectedOrg}</span>
  <span className="arrow"><i className="fa fa-chevron-down" ></i></span>
</div> */}

            <div className="mb-4">
              <label className="label-title">
                المال
              </label>
                              {/* <span className="selectdown2"><i className="fa fa-chevron-down"></i></span> */}
            <select className="form-control input-box custom-select">
                 
                 <option value="">اختر المبلغ</option>
                 <option value="100">100 ريال</option>
                 <option value="250">250 ريال</option>
                 <option value="500">500 ريال</option>
                <option value="1000">1000 ريال</option>
              </select>
            </div>
{/* 
            <div className="mb-4">
              <label className="label-title">وصف المنتج</label>
              <textarea
                rows="4"
                className="form-control input-box"
                placeholder=":تجربة أول ريكوست للدعم العيني "
              />
            </div> */}

            <button className="submit-btn w-100 ">
              إرسال الطلب
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

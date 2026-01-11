import React from "react";
import "../EyeSupport/EyeSupport.css";
import fsupport from "../../assets/fsupport.png";
import eyedark from "../../assets/eyesupport.png";
import { Link } from "react-router-dom";

export default function EyeSupport() {
  return (
    <div className="support-wrapper">
      <div className="container">
        <div className="row">

          {/* ===== TABS ===== */}
          <div className="col-lg-3  d-lg-block">
            <div className="support-tabs ">

              <Link
                to="/eyesupport"
                className="support-tab active-tab text-decoration-none"
              >
                <img src={eyedark} alt="" />
                <span className="eye-text">
                الدعم العيني
                  </span>
              </Link>

              <Link
                to="/financialsupport"
                className="support-tab inactive-tab text-decoration-none"
              >
                <img src={fsupport} alt="" />
                <span className="f-text">
                       الباقات 
                </span>
              </Link>

            </div>
          </div>

          {/* ===== FORM ===== */}
          <div className="col-lg-9 col-12">

        
                     <div className="mb-4">
              <label className="label-title pt-3">
                              الجهة المدعومة

              </label>
                              {/* <span className="selectdown2"><i className="fa fa-chevron-down"></i></span> */}
            <select className="form-control input-box custom-select">
                 
                 <option value="">الجهة المدعومة</option>
                 <option value="100">
                  جمعيةالخير 
                 </option>
        
              </select>
            </div>

            <div className="mb-4">
              <label className="label-title">
                نوع الدعم العيني
              </label>
                          <select className="form-control input-box custom-select">
                 <option value="">نوع الدعم العيني</option>
                 </select>
            </div>

            <div className="mb-4">
              <label className="label-title">وصف المنتج</label>
              <textarea
                rows="4"
                className="form-control input-box"
                placeholder=":تجربة أول ريكوست للدعم العيني "
              />
            </div>

            <button className="submit-btn w-100 ">
              إرسال الطلب
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

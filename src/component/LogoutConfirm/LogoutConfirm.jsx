import React from "react";
import "../LogoutConfirm/LogoutConfirm.css";
import profilepicture from "../../assets/profileicon.png";

import profileimg from "../../assets/profile-img.png";
import accountimg from "../../assets/account-img.png";
import marketingimg from "../../assets/m2.png";
import survimg from "../../assets/surv-img.png";

import myadvertisements from "../../assets/myadvertisements.png";
import addadvertisements from "../../assets/addadvertisements.png";
import logoutimg from "../../assets/logout-img.png";

import { Link, useNavigate } from "react-router-dom";

export default function LogoutConfirm() {
  const navigate = useNavigate();
  return (
    <div className="logout-wrapper container" >

      {/* ==== SIDEBAR ==== */}
    
           <div className="logoutmarketing-sidebar ">
             {/* <button className="side-btn " style={{alignItem:"center"}}>
                <img src={profileimg} alt="" />
               حسابي الشخصي
             </button> */}
                      <Link to="/profileaccount" className="side-btn white mt-5 ">
                        <img src={profileimg} alt="" />
                        <span className="logout-text px-2">حسابي الشخصي</span>
                      </Link>
    
             {/* <button className="side-btn">
               <img src={accountimg} alt="" />
               <Link to='/bankaccount' className="text-dark text-decoration-none"> الحساب البنكي</Link>
             </button> */}
    
  <Link to="/marketing" className="side-btn white">
    <img src={marketingimg} alt="" />
    <span className="px-2">التسويق</span>
  </Link>
             {/* <button className="side-btn">
                           <img src={survimg} alt="" /> 
    
                <Link to='/contractpage' className="text-dark text-decoration-none"> 
               التقييم والعقود
                </Link>
             </button>
     */}
        <Link to="/myaddvertisements" className="side-btn white">
                   <img src={myadvertisements} alt="" />
                   <span className="px-2">إعلاناتي</span>
                 </Link>
        <Link to="/addadvertisement" className="side-btn white">
              <img src={addadvertisements} alt="" />
              <span className="px-2">إضافة إعلان</span>
            </Link>
             <button className="side-btn logout">
               <img src={logoutimg} alt="" /> 
                 <Link to='/accounttype' className="text-white text-decoration-none"> 
              تسجيل الخروج
                </Link>
             </button>

           </div>

      {/* ==== LOGOUT CONTENT ==== */}
      <div className="logout-content">
        <h2 className="logout-title">هل تريد تسجيل الخروج ؟</h2>

   <button
      className="logout-main-btn2"
      onClick={() => navigate("/accounttype")}
    >
      تسجيل الخروج
    </button>
      </div>

    </div>
  );
}

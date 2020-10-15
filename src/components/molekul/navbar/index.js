import React from "react";
import "./navbar.scss";
import {ArrowDropDownIcon, NavigateIcon} from "../../../assets/";
export default function Navbar(){
    return (
        <div className="navbar-app bg-light" >
            <div>
                <img src={NavigateIcon} alt="icon" className="icon-back" />
                <div className="menu-item">
                    <p>Alamat Pemesanan</p>
                    <div className="location">
                        <b className="location">Tokopedia Tower</b><i><img className="location" src={ArrowDropDownIcon} alt=""/></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
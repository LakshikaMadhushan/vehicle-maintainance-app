import React from "react";
import {Button, Col, FormGroup, Label, Row} from "reactstrap";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";
import Select from "react-select";
import {useNavigate} from "react-router-dom";

const Layouts = ({children}) =>{
    const navigate=useNavigate()
    return <div >
        <Row style={{ alignItems: 'center', height: '100vh',width: '100%', backgroundColor:"#F1F0E8" }}>
            <Col md={2} className='navigate-layout' align="center" >
                <img src={logo} width={150} className='img'  />
                <div className="navigate-button" onClick={() => navigate("/dashboard")} >
                    <Label>Dashboard</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-service")} >
                    <Label>Manage Vehicle Service</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/service-details")}>
                    <Label>Vehicle Service Details</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-item")}>
                    <Label>Manage Item</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-item-category")}>
                    <Label>Manage Item Category</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-mechanic-service")}>
                    <Label>Manage Services</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-mechanic-service-category")}>
                    <Label>Manage Services Category</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-technician")}>
                    <Label>Manage Technicion</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-customer")}>
                    <Label>Manage Customer</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-admin")}>
                    <Label>Manage Admin</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/vehicle")}>
                    <Label>Manage Vehicle</Label>
                </div>
                <div className="navigate-button"onClick={() => navigate("/report")} >
                    <Label>Report</Label>
                </div>

            </Col>
            <Col md={10} className='layout'>
                <Row style={{borderRadius:"6px" , alignItems: 'center',margin:'8px 0 8px 0', height: '8vh', backgroundColor:"#ffffff" }}>
                    <Col md={11}> <div  align="right">  <Label  align="right" style={{fontSize:"14px",alignItems: 'center'}}><b>Lakshika Madhushan</b> </Label></div></Col>
                    <Col md={1}><div  align="right"   onClick={() => navigate("/login")}>   <img src={logout} width={40} className='img'  /></div></Col>

                </Row>
                {children}
                <Row style={{borderRadius:"6px",alignItems: 'center', height: '8vh',margin:'8px 0 8px 0', backgroundColor:"#ffffff" }}>
                    <Label align="center" style={{fontSize:"14px"}}>Copyright © 2023 <b>Lakshika Madhushan</b>. All rights reserved.</Label>
                </Row>
            </Col>
        </Row>
    </div>
}

export default Layouts;

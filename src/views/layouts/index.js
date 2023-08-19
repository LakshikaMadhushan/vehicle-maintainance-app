import React from "react";
import {Button, Col, FormGroup, Label, Row} from "reactstrap";
import logo from "../../assets/logo.png";
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
                    <Label>Manage Service</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/service-details")}>
                    <Label>Service Details</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-item")}>
                    <Label>Manage Item</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-mechanic-service")}>
                    <Label>Manage Mechanic Service</Label>
                </div>
                <div className="navigate-button" onClick={() => navigate("/manage-technician")}>
                    <Label>Manage Technicion</Label>
                </div>
                <div className="navigate-button" >
                    <Label>Manage Admin</Label>
                </div>
                <div className="navigate-button" >
                    <Label>Report</Label>
                </div>

            </Col>
            <Col md={10} className='layout'>
                <Row style={{borderRadius:"6px" , alignItems: 'center',margin:'8px 0 8px 0', height: '8vh', backgroundColor:"#ffffff" }}>
                    <Label align="right" style={{fontSize:"14px"}}><b>Lakshika Madhushan</b></Label>
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

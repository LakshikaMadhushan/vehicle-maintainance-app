import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Col, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'


const Dashboard = () =>{
    const navigate=useNavigate()
    return <div >
        <Row style={{ alignItems: 'center', height: '100vh',width: '100%', backgroundColor:"#F1F0E8" }}>
        <Col md={2} className='navigate-layout' align="center" >
            <img src={logo} width={150} className='img'  />
            <div className="navigate-button" onClick={() => navigate("/register")} >
                <Label>Dashboard</Label>
            </div>
            <div className="navigate-button"onClick={() => navigate("/manage-service")} >
                <Label>Manage Service</Label>
            </div>
            <div className="navigate-button" >
                <Label>Service Details</Label>
            </div>
            <div className="navigate-button" >
                <Label>Manage Item</Label>
            </div>
            <div className="navigate-button" >
                <Label>Manage Mechanic Service</Label>
            </div>
            <div className="navigate-button" >
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
                <Row style={{ alignItems: 'center',margin:'1%', height: '10vh',width: '98%', backgroundColor:"#ffffff" }}>
                    <Label align="right" style={{fontSize:"14px"}}><b>Lakshika Madhushan</b></Label>
                </Row>

                <Row style={{ alignItems: 'center',margin:'1%', height: '74vh',width: '98%', backgroundColor:"#ffffff" }}>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '15vh',width: '98%', backgroundColor:"#951a1a" }}>
                        <Col md={2} style={{height:"95%" ,margin:0}}>
                            <div className="dashboard-welcome-container" >
                                <Label className="welcome-text">Hello,</Label> <br/>
                                <Label className="welcome-text">Lakshika</Label> <br/>
                                <Label className="welcome-text">10:47 AM</Label> <br/>
                                <Label className="welcome-text">2023:08:13</Label>
                            </div>
                        </Col>

                        <Col md={10}  style={{height:"95%" ,margin:0}} align="left" >
                            <div className="dashboard-welcome-container" style={{display:"flex"}} >
                                <div className="dashBord-stats"></div>
                                <div className="dashBord-stats"></div>
                                <div className="dashBord-stats"></div>
                            </div>
                        </Col>

                    </Row>

                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"#100d0d" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle"></div>
                            </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle"></div>
                            </Col>
                    </Row>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"#0c2ea0" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle"></div>
                        </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle"></div>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ alignItems: 'center',margin:'1%', height: '10vh',width: '98%', backgroundColor:"#ffffff" }}>
                    <Label align="center" style={{fontSize:"14px"}}>Copyright © 2023 <b>Lakshika Madhushan</b>. All rights reserved.</Label>
                </Row>
            </Col>
        </Row>
    </div>
}
export default Dashboard;

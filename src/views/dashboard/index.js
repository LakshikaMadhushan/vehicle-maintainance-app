import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Col, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'


const Dashboard = () =>{
    const navigate=useNavigate()
    return <div >
        <Row style={{ alignItems: 'center',padding:0,margin:0, backgroundColor:"#f1f0e8" }}>

                <Row style={{ alignItems: 'center',margin:0,width: '100%', backgroundColor:"#ffffff" }}>
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
        </Row>
    </div>
}
export default Dashboard;

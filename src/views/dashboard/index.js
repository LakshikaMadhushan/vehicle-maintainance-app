import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Col, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'


const Dashboard = () =>{
    const navigate=useNavigate()
    return <div >
        <Row style={{ alignItems: 'center',padding:0,margin:0, backgroundColor:"white" }}>

                <Row style={{ alignItems: 'center',margin:0,width: '100%', backgroundColor:"#ffffff" }}>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '15vh',width: '98%', backgroundColor:"white" }}>
                        <Col md={2} style={{height:"95%" ,margin:0}}>
                            <div className="dashboard-welcome-container" >
                                <Label className="welcome-text">Hello,</Label> <br/>
                                <Label className="welcome-text">Lakshika</Label> <br/>
                                {/*<Label className="welcome-text">10:47 AM</Label> <br/>*/}
                                <Label className="welcome-text">2023:08:13</Label>
                            </div>
                        </Col>

                        <Col md={10}  style={{height:"95%" ,margin:0}} align="left" >
                            <div className="dashboard-welcome-container" style={{display:"flex"}} >
                                <div className="dashBord-stats"> <p>Total Admin</p>  <h2>0</h2></div>
                                <div className="dashBord-stats"><p>Total Technician</p>  <h2>0</h2></div>
                                <div className="dashBord-stats"><p>Total Customer</p> <h2>0</h2></div>
                            </div>
                        </Col>

                    </Row>

                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"#ffffff" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle">
                            <h3>Total Mechanical Services</h3>  <h1>0</h1>
                        </div>
                            </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle">
                            <h3>Total Items</h3>  <h1>0</h1>
                        </div>
                            </Col>
                    </Row>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"white" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle">
                                <h3 >Total Vehicle</h3>  <h1>0</h1>
                            </div>
                        </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle">
                                <h3>Total Service</h3>  <h1>0</h1>
                            </div>
                        </Col>
                    </Row>
                </Row>
        </Row>
    </div>
}
export default Dashboard;

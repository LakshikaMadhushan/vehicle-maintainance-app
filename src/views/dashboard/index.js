import React, {useEffect, useState} from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Col, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import {getAllCustomer} from "../../services/customerService";
import {getAllAdminDashboard} from "../../services/dashboardService";


const Dashboard = () =>{
    const navigate=useNavigate()

    const [admin, setAdmin] = useState(0)
    const [technician, setTechnician] = useState(0)
    const [customer, setCustomer] = useState(0)
    const [mechanicService, setMechanicService] = useState(0)
    const [item, setItem] = useState(0)
    const [vehicle, setVehicle] = useState(0)
    const [service, setService] = useState(0)


    useEffect(() => {
        loadAdminDashboard();
    }, [])


    const loadAdminDashboard = async () => {
        const response = await getAllAdminDashboard()
        setAdmin(response.body.totalAdmin);
        setTechnician(response.body.totalTechnician)
        setCustomer(response.body.totalCustomer)
        setMechanicService(response.body.totalMechanicServices)
        setItem(response.body.totalItems)
        setVehicle(response.body.totalVehicle)
        setService(response.body.totalServices)
    }





    return <div >
        <Row style={{ alignItems: 'center',padding:0,margin:0, backgroundColor:"white" }}>

                <Row style={{ alignItems: 'center',margin:0,width: '100%', backgroundColor:"#ffffff" }}>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '15vh',width: '98%', backgroundColor:"white" }}>
                        <Col md={2} style={{height:"95%" ,margin:0}}>
                            <div className="dashboard-welcome-container" >
                                <Label className="welcome-text">Hello,</Label> <br/>
                                <Label className="welcome-text">Welcome</Label> <br/>
                                {/*<Label className="welcome-text">10:47 AM</Label> <br/>*/}
                                <Label className="welcome-text">2023:08:13</Label>
                            </div>
                        </Col>

                        <Col md={10}  style={{height:"95%" ,margin:0}} align="left" >
                            <div className="dashboard-welcome-container" style={{display:"flex"}} >
                                <div className="dashBord-stats"> <p>Total Admin</p>  <h2>{admin}</h2></div>
                                <div className="dashBord-stats"><p>Total Technician</p>  <h2>{technician}</h2></div>
                                <div className="dashBord-stats"><p>Total Customer</p> <h2>{customer}</h2></div>
                            </div>
                        </Col>

                    </Row>

                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"#ffffff" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle">
                            <h3>Total Mechanical Services</h3>  <h1>{mechanicService}</h1>
                        </div>
                            </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                        <div className="dashBoard-middle">
                            <h3>Total Items</h3>  <h1>{item}</h1>
                        </div>
                            </Col>
                    </Row>
                    <Row style={{ alignItems: 'center',margin:'1%', height: '25vh',width: '98%', backgroundColor:"white" }}>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle">
                                <h3 >Total Vehicle</h3>  <h1>{vehicle}</h1>
                            </div>
                        </Col>
                        <Col md={6} style={{height:"95%" ,margin:0,backgroundColor:"white"}}>
                            <div className="dashBoard-middle">
                                <h3>Total Service</h3>  <h1>{service}</h1>
                            </div>
                        </Col>
                    </Row>
                </Row>
        </Row>
    </div>
}
export default Dashboard;

import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';


const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
];
const data = [
    { id: 1, serviceType: 'Service', category: "SUV" ,name:"clean radiator",price:"2500"},
    {id: 2, serviceType: 'Item', category: "Hybrid" ,name:"Battery",price:"5000000"}

];
const ServiceDetails = () =>{
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


                <Row style={{alignItems: 'center', margin:'1%', height: '74vh',width: '98%', backgroundColor:"#ffffff"}}>
                    <div style={{height:"10%"}}>
                        <Label className="heading-text">Service Details</Label>
                        <div className="line"></div>
                    </div>
                    <Row style={{alignItems: 'center', margin:'1%', height: '30%',width: '98%',border: '2px solid #ccc',
                        borderRadius: '5px',display:"flex",backgroundColor:"yellow",padding:"0px"}}>

                    <div style={{display:"flex",backgroundColor:"red"}}>
                        <FormGroup >
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label className="label">Service Model</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <Label className="label">Customer</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </div>
                        <div style={{display:"flex",backgroundColor:"red"}}>
                            <FormGroup >
                                <Label className="label">Service Date</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <Label className="label">Next Service Date</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>

                            <div  style={{backgroundColor:"grey",paddingTop:"5%" ,width:"77vh",alignItems:"right"}}>
                                <Button color="danger" style={{ width: '40%',marginLeft:"12%" }} onClick={() => navigate("/register")}>Clear</Button>
                                <Button color="success" style={{ width: '40%',marginLeft:"8%"}} onClick={() => navigate("/register")}>filter</Button>
                            </div>

                        </div>
                    </Row>






                    <Row style={{alignItems: 'center', margin:'1%', height: '50%',width: '98%', backgroundColor:"yellow" }}>
                        <div >

                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Service Type</th>
                                    <th>Category</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Price</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.serviceType}</td>
                                        <td>{item.category}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            {/*<div style={{display:"flex",alignItems:"center",width:"100%,",backgroundColor:"white"}}>*/}
                            {/*<div style={{backgroundColor:"grey",padding:"3px" ,width:"35vh",alignItems:"center",marginRight:"7vh"}}>*/}
                            {/*    <Label style={{padding:"2px" ,width:"35vh",alignItems:"center",color: "green"}}>Total</Label><br/>*/}
                            {/*    <Label style={{padding:"2px" ,width:"35vh",alignItems:"center",color: "green"}}>LKR 00.00</Label>*/}
                            {/*</div>*/}
                            {/*<div align="right" style={{backgroundColor:"red",padding:"5px" ,width:"100%",alignItems:"center",height:"10vh"}}>*/}
                            {/*    <Button color="success" style={{ width: '30%',alignItems:"right"}} onClick={() => navigate("/register")}>Confirm Service</Button>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                        </div>
                     </Row>








                </Row>




                <Row style={{ alignItems: 'center',margin:'1%', height: '10vh',width: '98%', backgroundColor:"#ffffff" }}>
                    <Label align="center" style={{fontSize:"14px"}}>Copyright © 2023 <b>Lakshika Madhushan</b>. All rights reserved.</Label>
                </Row>
            </Col>
        </Row>
    </div>
}
export default ServiceDetails;

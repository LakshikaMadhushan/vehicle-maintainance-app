import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';


const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
];
const data = [
    {id: 1, serviceType: 'Service', category: "SUV", name: "clean radiator", price: "2500"},
    {id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000"}

];
const ServiceDetails = () => {
    const navigate = useNavigate()
    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', height: '80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Service Details</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Model</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Customer</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Service Date</Label>
                                <div className="modern-dropdown">
                                    <Select options={options}/>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Next Service Date</Label>
                                <div className="modern-dropdown">
                                    <Select options={options}/>
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">

                            <Button color="danger" style={{width: '40vh'}}
                                    onClick={() => navigate("/register")}>Clear</Button>
                        </Col>
                        <Col md={3} align="left">
                            <Button color="success" style={{width: '40vh'}}
                                    onClick={() => navigate("/register")}>filter</Button>

                        </Col>
                    </Row>
                </Row>


                <Row style={{
                    alignItems: 'center',
                    backgroundColor: "yellow",
                    margin: '0%'
                }}>
                    <Col md={12} align="left">

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


                    </Col>
                </Row>


            </Row>


        </Row>
    </div>
}
export default ServiceDetails;

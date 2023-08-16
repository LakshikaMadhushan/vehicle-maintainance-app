import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import Select from 'react-select';


const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'}
];
const data = [
    {id: 1, serviceType: 'Service', category: "SUV", name: "clean radiator", price: "2500"},
    {id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000"},
    {id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000"},
    {id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000"}

];
const ManageMechanicService = () => {
    const navigate = useNavigate()
    return <div>
        <Row style={{alignItems: 'center', margin: 0, padding: 0, backgroundColor: "#F1F0E8"}}>
            <Row style={{alignItems: 'center', margin: '0%', height: '80vh', padding: 10, backgroundColor: "#ffffff"}}>
                <Col md={12} align="left" style={{padding: 0}}>
                    <Label className="heading-text">Manage Mechanic Service</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Mechanic Service Name</Label>
                            <Input placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Price</Label>
                            <Input placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Vehicle Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{
                    alignItems: 'center', margin: '0%', border: '2px solid #ccc',
                    borderRadius: '5px', backgroundColor: "yellow", padding: "0px", justifyContent: "right"
                }}>
                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', margin: 0}}
                                onClick={() => navigate("/register")}>Save</Button>
                    </Col>
                </Row>

                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    padding: '0%',
                    backgroundColor: "yellow"
                }}>

                    <Col md={3} align="left" style={{padding: 0}}>
                        <FormGroup className="text-field">
                            <Label>Mechanic Service Name</Label>
                            <Input placeholder=""/>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup className="text-field">
                            <Label>Category</Label>
                            <div className="modern-dropdown">
                                <Select options={options}/>
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="right">
                        <Button color="danger" style={{width: '30vh', marginLeft: "0"}}
                                onClick={() => navigate("/register")}>Clear</Button>
                    </Col>
                    <Col md={3} align="right">
                        <Button color="success" style={{width: '30vh', marginLeft: "0"}}
                                onClick={() => navigate("/register")}>Filter</Button>
                    </Col>

                    <Row style={{
                        alignItems: 'center', border: '2px solid #ccc', margin: '0%',
                        borderRadius: '5px', backgroundColor: "yellow", padding: "0px"
                    }}>

                        <Col md={12} align="right" style={{padding: 0}}>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Item Name</th>
                                    <th>Brand</th>
                                    <th>Seller Name</th>
                                    <th>Buying price</th>
                                    <th>Selling Price</th>
                                    <th>Status</th>
                                    <th>Qty</th>
                                    <th>Category</th>
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


        </Row>
    </div>
}
export default ManageMechanicService;

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
        <Row style={{ alignItems: 'center',width: '100%',margin:0,padding:0, backgroundColor:"#F1F0E8" }}>
                <Row style={{alignItems: 'center', margin:'0%', height: '80vh',padding:0, backgroundColor:"#ffffff"}}>
                    <div style={{height:"10%"}}>
                        <Label className="heading-text">Service Details</Label>
                        <div className="line"></div>
                    </div>
                    <Row style={{alignItems: 'center', margin:'1%',width: '98%',border: '2px solid #ccc',
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


                        </div>
                     </Row>







                </Row>






        </Row>
    </div>
}
export default ServiceDetails;

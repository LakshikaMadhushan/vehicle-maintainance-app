import React from "react";
import './style.css'
import '../common/style.css'
import {useNavigate} from 'react-router-dom'
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
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
const ManageItem = () =>{
    const navigate=useNavigate()
    return <div >
        <Row style={{ alignItems: 'center',width: '100%',margin:0,padding:0, backgroundColor:"#F1F0E8" }}>
                <Row style={{alignItems: 'center', margin:'0%', height: '80vh',padding:0, backgroundColor:"#ffffff"}}>
                    <div style={{height:"10%"}}>
                        <Label className="heading-text">Manage Item</Label>
                        <div className="line"></div>
                    </div>
                    <Row style={{alignItems: 'center', margin:'1%',width: '98%',border: '2px solid #ccc',
                        borderRadius: '5px',display:"flex",backgroundColor:"yellow",padding:"0px"}}>

                    <div style={{display:"flex",backgroundColor:"red"}}>
                        <FormGroup className="text-field">
                            <Label>Item Name</Label>
                            <Input placeholder="" />
                        </FormGroup>

                        <FormGroup className="text-field">
                            <Label>Brand</Label>
                            <Input placeholder="" />
                        </FormGroup>

                        <FormGroup className="text-field">
                            <Label>Seller Name</Label>
                            <Input placeholder="" />
                        </FormGroup>

                        <FormGroup className="text-field">
                            <Label>Selling Price</Label>
                            <Input placeholder="Lakshika" />
                        </FormGroup>
                        <FormGroup className="text-field">
                            <Label>Buying Price</Label>
                            <Input placeholder="Lakshika" />
                        </FormGroup>

                    </div>
                        <div style={{display:"flex",backgroundColor:"red"}}>

                            <FormGroup className="text-field">
                                <Label>Status</Label>
                                <Input placeholder="" />
                            </FormGroup>

                            <FormGroup className="text-field">
                                <Label>Qty</Label>
                                <Input placeholder="" />
                            </FormGroup>

                            <FormGroup className="text-field">
                                <Label className="label">Category</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>

                            <div  style={{backgroundColor:"grey",paddingTop:"2.5%" ,width:"60vh",alignItems:"right",marginLeft:"4vh"}}>
                                <Button color="danger" style={{ width: '40%',marginLeft:"12%" }} onClick={() => navigate("/register")}>Clear</Button>
                                <Button color="success" style={{ width: '40%',marginLeft:"8%"}} onClick={() => navigate("/register")}>Save</Button>
                            </div>

                        </div>
                    </Row>






                    <Row style={{alignItems: 'center', margin:'1%', height: '50%',width: '98%', backgroundColor:"yellow" }}>
                        <div style={{display:"flex",backgroundColor:"red"}}>

                            <FormGroup className="text-field">
                                <Label>Item Name</Label>
                                <Input placeholder="" />
                            </FormGroup>

                            <FormGroup className="text-field">
                                <Label className="label">Category</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>



                            <div  style={{backgroundColor:"grey",paddingTop:"2.5%" ,width:"60vh",alignItems:"right",marginLeft:"4vh"}}>
                                <Button color="danger" style={{ width: '40%',marginLeft:"12%" }} onClick={() => navigate("/register")}>Clear</Button>
                                <Button color="success" style={{ width: '40%',marginLeft:"8%"}} onClick={() => navigate("/register")}>Filter</Button>
                            </div>

                        </div>
                        <div >

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


                        </div>
                     </Row>







                </Row>






        </Row>
    </div>
}
export default ManageItem;

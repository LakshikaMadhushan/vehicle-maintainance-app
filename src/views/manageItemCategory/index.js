import React from "react";
import './style.css'
import '../common/style.css'
import { useNavigate } from 'react-router-dom'
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import logo from '../../assets/logo.png'
import Select from 'react-select';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'ID',
        selector: row => row.title,
    },
    {
        name: 'Service Type',
        selector: row => row.year,
    },
    {
        name: 'Category',
        selector: row => row.year,
    },
    {
        name: 'Name',
        selector: row => row.year,
    },
    {
        name: 'Price',
        selector: row => row.year,
    },
];

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
];
// const data = [
//     { id: 1, serviceType: 'Service', category: "SUV", name: "clean radiator", price: "2500" },
//     { id: 2, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000" },
//     { id: 3, serviceType: 'Item', category: "Hybrid", name: "Battery", price: "5000000" }
//
// ];

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#F0F0F0',
            fontWeight:'bold'
        },
    }
};

const ManageMechanicServiceCategory = () => {
    const navigate = useNavigate()

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        }
    ]

    return <div>
        <Row style={{ alignItems: 'center', width: '100%', margin: 0, padding: 0, backgroundColor: "#f1f0e8" }}>
            <Row style={{ alignItems: 'center', margin: '0', padding: 10, backgroundColor: "#ffffff" }}>
                <Col md={12} align="left" style={{ padding: 0 }}>
                    <Label className="heading-text">Manage Mechanic Service Category</Label>
                    <div className="line"></div>
                </Col>

                <Row style={{
                    alignItems: 'center', margin: '0%', border: '2px solid #ccc', marginTop: '5px',marginLeft: '0px',
                    borderRadius: '5px', display: "flex", backgroundColor: "yellow", padding: "0px"
                }}>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Vehicle No</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Technician</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Model</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </Col>

                    <Col md={3} align="left">
                        <FormGroup>
                            <Label className="label">Service Type</Label>
                            <div className="modern-dropdown">
                                <Select options={options} />
                            </div>
                        </FormGroup>
                    </Col>


                    <Row style={{
                        alignItems: 'center', margin: '0%', border: '2px solid #ccc',
                        borderRadius: '5px', display: "flex", backgroundColor: "yellow", padding: "0px"
                    }}>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Mechanic Service Category</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3} align="left">
                            <FormGroup>
                                <Label className="label">Mechanic Service</Label>
                                <div className="modern-dropdown">
                                    <Select options={options} />
                                </div>
                            </FormGroup>
                        </Col>


                        <Col md={3} align="left">
                            <Label style={{
                                padding: "5px",
                                width: "35vh",
                                alignItems: "center",
                                color: "green"
                            }}>price</Label><br />
                            <Label style={{ padding: "5px", width: "35vh", alignItems: "center", color: "green" }}>LKR
                                00.00</Label>
                        </Col>
                        <Col md={1} align="left">
                            <Button color="warning" style={{ width: '100px', marginLeft: "0" }}
                                onClick={() => navigate("/register")}>Remove</Button>
                        </Col>
                        <Col md={1} align="right">
                            <Button color="success" style={{ width: '100px', marginLeft: "0px%" }}
                                onClick={() => navigate("/register")}>Add</Button>
                        </Col>


                    </Row>

                </Row>


                <Row style={{
                    alignItems: 'center',
                    margin: '0%',
                    height: '50%',
                    backgroundColor: "yellow",
                    padding:0,
                    paddingTop:"2px"
                }}>
                    <Col md={12} style={{padding:0,margin:0}} >
                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            customStyles={customStyles}
                            paginationRowsPerPageOptions={[3, 5, 10]}
                            // defaultPageSize={2}
                            paginationPerPage={3}
                        />
                        {/* <table>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Service Type</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
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
                        </table> */}

                        <Row style={{
                            alignItems: 'center',
                            margin: '0%',
                            height: '50%',
                            backgroundColor: "yellow"
                        }}>
                            <Col md={6} style={{ borderRadius: "5px", border: '2px solid #ccc' }} >
                                <Label style={{
                                    padding: "2px",
                                    width: "35vh",
                                    alignItems: "center",
                                    color: "green"
                                }}>Total</Label><br />
                                <Label style={{ padding: "2px", width: "35vh", alignItems: "center", color: "green" }}>LKR
                                    00.00</Label>
                            </Col>

                            <Col md={6} style={{ borderRadius: "5px", border: '2px solid #ccc', margin: 0, padding: 0 }}>
                                <div style={{ backgroundColor: "red", alignItems: 'center', justifyContent: "right" }} align="right">
                                    <Button color="success" style={{ width: '25vh' }}
                                        onClick={() => navigate("/register")}>Confirm Service</Button>
                                </div>
                            </Col>


                        </Row>

                    </Col>
                </Row>


            </Row>


            {/*<Row style={{ alignItems: 'center',margin:'1%', height: '10vh',width: '98%', backgroundColor:"#ffffff" }}>*/}
            {/*    <Label align="center" style={{fontSize:"14px"}}>Copyright © 2023 <b>Lakshika Madhushan</b>. All rights reserved.</Label>*/}
            {/*</Row>*/}
            {/*</Col>*/}
        </Row>
    </div>
}
export default ManageMechanicServiceCategory;
